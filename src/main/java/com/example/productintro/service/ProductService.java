package com.example.productintro.service;

import com.example.productintro.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final List<Product> products = List.of(
            new Product(
                    1L,
                    "비트로스트 카페 브랜딩",
                    "따뜻한 커피 문화를 담은 로고·패키지·간판 시스템",
                    "로고 타입, 컬러 가이드, 메뉴판·컵·에코백까지 일관된 비주얼로 "
                            + "동네 카페의 개성을 살렸습니다. 포스터와 SNS 템플릿도 함께 제작했습니다.",
                    "브랜딩",
                    "2025 · 브랜딩",
                    "branding",
                    true),
            new Product(
                    2L,
                    "몽글몽글 캐릭터 굿즈",
                    "말랑한 캐릭터 IP 기반 스티커·키링·파우치 라인",
                    "캐릭터 시트부터 굿즈 목업, 실제 제작용 일러스트·패키지까지 담당했습니다. "
                            + "팝업 부스와 온라인 스토어용 상세 페이지도 제작했습니다.",
                    "굿즈",
                    "2025 · 굿즈",
                    "goods",
                    true),
            new Product(
                    3L,
                    "네온 드림 포스터 시리즈",
                    "레트로·네온 감성 일러스트 포스터 6종",
                    "펑키한 컬러와 타이포가 돋보이는 한정판 포스터 시리즈입니다. "
                            + "실크 스크린 인쇄용 색상 분리 파일과 전시용 목업을 제공했습니다.",
                    "일러스트",
                    "2024 · 일러스트",
                    "illustration",
                    true),
            new Product(
                    4L,
                    "팝업 스토어 키트",
                    "부스·배너·진열·포토존 통합 패키지 디자인",
                    "3일짜리 팝업을 위한 공간 그래픽, 안내 사인, 포토월, 굿즈 진열대 시안을 "
                            + "한 세트로 설계했습니다. 현장 시공팀과 협업해 컬러 매칭까지 맞췄습니다.",
                    "패키지",
                    "2024 · 패키지",
                    "package",
                    false),
            new Product(
                    5L,
                    "아티스트 콜라보 머그",
                    "로컬 일러스트레이터 × 펑키 기즈모 한정 머그",
                    "일러스트 3종을 선별해 머그·박스·스티커 세트로 구성했습니다. "
                            + "콜라보 로고와 번들 패키지, 판매용 썸네일 템플릿까지 제작했습니다.",
                    "콜라보",
                    "2024 · 콜라보",
                    "collab",
                    false),
            new Product(
                    6L,
                    "온라인 굿즈 스토어 론칭",
                    "브랜드 숍 UI·상세·배너 키비주얼",
                    "자사 굿즈를 판매하는 온라인 스토어의 메인 비주얼, 카테고리 배너, "
                            + "상품 상세 레이아웃 가이드를 디자인했습니다. 모바일 퍼스트로 구성했습니다.",
                    "스토어",
                    "2023 · 스토어",
                    "store",
                    false));

    public List<Product> findAll() {
        return products;
    }

    public List<Product> findFeatured() {
        return products.stream().filter(Product::isFeatured).toList();
    }

    public Optional<Product> findById(Long id) {
        return products.stream().filter(p -> p.getId().equals(id)).findFirst();
    }
}
