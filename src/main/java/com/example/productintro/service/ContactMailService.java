package com.example.productintro.service;

import com.example.productintro.dto.ContactRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class ContactMailService {

    private static final Map<String, String> INQUIRY_LABELS = Map.of(
            "branding", "브랜딩·로고",
            "goods", "굿즈·패키지",
            "illustration", "일러스트·포스터",
            "popup", "팝업·전시",
            "collab", "콜라보",
            "other", "기타");

    private final JavaMailSender mailSender;
    private final String toAddress;
    private final String fromAddress;

    public ContactMailService(
            @Autowired(required = false) JavaMailSender mailSender,
            @Value("${contact.mail.to}") String toAddress,
            @Value("${contact.mail.from}") String fromAddress) {
        this.mailSender = mailSender;
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
    }

    public boolean isEnabled() {
        return mailSender != null;
    }

    public void send(ContactRequest request) throws MessagingException {
        if (!isEnabled()) {
            throw new IllegalStateException("Mail sender is not configured");
        }

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(toAddress);
        helper.setFrom(fromAddress);
        helper.setReplyTo(request.email());
        helper.setSubject(buildSubject(request));
        helper.setText(buildBody(request), false);

        mailSender.send(message);
    }

    private String buildSubject(ContactRequest request) {
        String type = INQUIRY_LABELS.getOrDefault(request.inquiryType(), request.inquiryType());
        return "[FUNKKY GIZMO] " + type + " — " + request.name();
    }

    public static String buildBody(ContactRequest request) {
        String type = INQUIRY_LABELS.getOrDefault(request.inquiryType(), request.inquiryType());
        String company = request.company() == null || request.company().isBlank()
                ? "(미입력)"
                : request.company();

        return """
                FUNKKY GIZMO 웹사이트 문의가 접수되었습니다.

                ────────────────────────
                이름: %s
                이메일: %s
                브랜드/팀: %s
                문의 유형: %s

                프로젝트 설명:
                %s
                ────────────────────────
                """
                .formatted(request.name(), request.email(), company, type, request.message());
    }

    public static String inquiryLabel(String inquiryType) {
        return INQUIRY_LABELS.getOrDefault(inquiryType, inquiryType);
    }
}
