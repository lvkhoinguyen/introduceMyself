package com.example.introduce.service;

import com.example.introduce.domain.Profile;
import com.example.introduce.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public synchronized Profile getProfileDetail() {
        java.util.List<Profile> all = profileRepository.findAll();
        if (!all.isEmpty()) {
            return all.get(0);
        }
        java.util.List<String> points = java.util.Arrays.asList(
                "Ưu tiên mã nguồn sạch và dễ mở rộng.",
                "Thiết kế giao diện có nhịp, có khoảng thở, không phẳng lì.",
                "Tập trung sản phẩm web mang cảm giác hiện đại và đáng tin."
        );
        Profile defaultProfile = new Profile(
                null,
                "Lê Võ Khôi Nguyên",
                "Backend Developer",
                "/avatar.jpg",
                "https://github.com/lvkhoinguyen",
                "Mình là sinh viên năm cuối CNTT tại HaUI, quan tâm đến cả backend lẫn frontend. Khi làm dự án, mình thường chú ý đến cấu trúc code, hiệu năng và trải nghiệm sử dụng thực tế.",
                points);
        return profileRepository.save(defaultProfile);
    }
}