package com.example.introduce.config;

import com.example.introduce.domain.Experience;
import com.example.introduce.domain.Project;
import com.example.introduce.domain.SkillGroup;
import com.example.introduce.domain.SkillItem;
import com.example.introduce.repository.ExperienceRepository;
import com.example.introduce.repository.ProjectRepository;
import com.example.introduce.repository.SkillGroupRepository;
import com.example.introduce.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProfileService profileService;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private SkillGroupRepository skillGroupRepository;

    @Override
    public void run(String... args) throws Exception {
        // 1. Khởi tạo Profile mặc định nếu chưa có
        profileService.getProfileDetail();

        // 2. Khởi tạo Projects nếu chưa có
        if (projectRepository.count() == 0) {
            projectRepository.save(new Project(
                    null,
                    "IDP.DMS",
                    "Hệ thống quản lý tài liệu số cho doanh nghiệp, tập trung vào lưu trữ, phân loại và truy xuất nhanh.",
                    Arrays.asList("C# .NET", "Python", "React"),
                    "from-cyan-400/15 to-emerald-400/10",
                    "https://github.com/lvkhoinguyen",
                    "",
                    1
            ));

            projectRepository.save(new Project(
                    null,
                    "ShoppingWeb",
                    "E-commerce full-stack với REST API, thanh toán VNPay và chatbot hỗ trợ người dùng.",
                    Arrays.asList("Spring Boot", "React", "Docker"),
                    "from-emerald-400/15 to-lime-400/10",
                    "https://github.com/lvkhoinguyen",
                    "",
                    2
            ));

            projectRepository.save(new Project(
                    null,
                    "Object Detection",
                    "Pipeline nhận diện phương tiện thời gian thực với YOLOv8, ONNX và FastAPI.",
                    Arrays.asList("Python", "YOLOv8", "FastAPI"),
                    "from-violet-400/15 to-sky-400/10",
                    "https://github.com/lvkhoinguyen",
                    "",
                    3
            ));

            projectRepository.save(new Project(
                    null,
                    "Handwriting Recognition",
                    "Mô hình CNN nhận diện chữ viết tay, nhấn vào tiền xử lý và độ chính xác đầu ra.",
                    Arrays.asList("Python", "CNN", "ML"),
                    "from-amber-400/15 to-orange-400/10",
                    "https://github.com/lvkhoinguyen",
                    "",
                    4
            ));

            projectRepository.save(new Project(
                    null,
                    "Personal Portfolio",
                    "Website cá nhân dạng SPA, responsive, motion rõ và tối ưu cho tuyển dụng.",
                    Arrays.asList("React", "Tailwind", "Motion"),
                    "from-slate-400/15 to-white/5",
                    "https://github.com/lvkhoinguyen",
                    "",
                    5
            ));
        }

        // 3. Khởi tạo Experiences nếu chưa có
        if (experienceRepository.count() == 0) {
            experienceRepository.save(new Experience(
                    null,
                    "Sinh viên năm cuối ngành CNTT",
                    "Đại học Công nghiệp Hà Nội",
                    "2022 - hiện tại",
                    "Học các nền tảng cốt lõi như cấu trúc dữ liệu, giải thuật, cơ sở dữ liệu và kiến trúc phần mềm. Đồng thời tập trung vào Spring Boot và hệ sinh thái React.",
                    "graduation",
                    1
            ));

            experienceRepository.save(new Experience(
                    null,
                    "Phát triển hệ thống ShoppingWeb",
                    "Đồ án chuyên ngành & thực hành",
                    "2025",
                    "Thiết kế và triển khai hệ thống thương mại điện tử với API rõ ràng, thanh toán VNPay và chatbot hỗ trợ người dùng.",
                    "briefcase",
                    2
            ));

            experienceRepository.save(new Experience(
                    null,
                    "Xây dựng dự án cá nhân & triển khai",
                    "Học hỏi liên tục",
                    "Liên tục",
                    "Tự nghiên cứu Docker, Railway, Vercel và quy trình triển khai cơ bản để sản phẩm chạy ổn định hơn.",
                    "award",
                    3
            ));
        }

        // 4. Khởi tạo SkillGroups nếu chưa có
        if (skillGroupRepository.count() == 0) {
            skillGroupRepository.save(new SkillGroup(
                    null,
                    "Backend",
                    "database",
                    "Kiến trúc dịch vụ, API và dữ liệu.",
                    1,
                    Arrays.asList(
                            new SkillItem("Java", 90),
                            new SkillItem("Spring Boot", 85)
                    )
            ));

            skillGroupRepository.save(new SkillGroup(
                    null,
                    "Frontend",
                    "layout",
                    "UI rõ ràng, responsive và có chuyển động.",
                    2,
                    Arrays.asList(
                            new SkillItem("React", 80),
                            new SkillItem("Tailwind CSS", 90)
                    )
            ));

            skillGroupRepository.save(new SkillGroup(
                    null,
                    "Triển khai",
                    "settings",
                    "Đóng gói, đưa lên cloud và vận hành cơ bản.",
                    3,
                    Arrays.asList(
                            new SkillItem("Docker", 75),
                            new SkillItem("Vercel", 85),
                            new SkillItem("Railway", 80)
                    )
            ));
        }
    }
}
