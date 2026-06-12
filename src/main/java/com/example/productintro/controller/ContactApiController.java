package com.example.productintro.controller;

import com.example.productintro.dto.ContactRequest;
import com.example.productintro.service.ContactMailService;
import jakarta.mail.MessagingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContactApiController {

    private final ContactMailService contactMailService;
    private final String mailTo;

    public ContactApiController(
            @Autowired(required = false) ContactMailService contactMailService,
            @Value("${contact.mail.to:funkkygizmo.mari@gmail.com}") String mailTo) {
        this.contactMailService = contactMailService;
        this.mailTo = mailTo;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submit(@RequestBody ContactRequest request) {
        String validationError = validate(request);
        if (validationError != null) {
            return ResponseEntity.badRequest().body(Map.of("message", validationError));
        }

        if (contactMailService == null || !contactMailService.isEnabled()) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body(Map.of(
                            "message",
                            "메일 앱으로 문의 내용을 보내 주세요.",
                            "mailto",
                            buildMailtoLink(request)));
        }

        try {
            contactMailService.send(request);
            return ResponseEntity.ok(Map.of("message", "문의 메일을 보냈습니다. 확인 후 연락드리겠습니다."));
        } catch (MessagingException ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "message",
                            "메일 전송에 실패했습니다. 메일 앱으로 다시 보내 주세요.",
                            "mailto",
                            buildMailtoLink(request)));
        }
    }

    private String validate(ContactRequest request) {
        if (request.name() == null || request.name().isBlank()) {
            return "이름을 입력해 주세요.";
        }
        if (request.email() == null || !request.email().contains("@")) {
            return "올바른 이메일을 입력해 주세요.";
        }
        if (request.message() == null || request.message().isBlank()) {
            return "프로젝트 설명을 입력해 주세요.";
        }
        return null;
    }

    private String buildMailtoLink(ContactRequest request) {
        String subject = "[FUNKKY GIZMO] "
                + ContactMailService.inquiryLabel(
                        request.inquiryType() != null ? request.inquiryType() : "other")
                + " — "
                + request.name();

        return "mailto:" + encode(mailTo) + "?subject=" + encode(subject) + "&body=" + encode(ContactMailService.buildBody(request));
    }

    private static String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8).replace("+", "%20");
    }
}
