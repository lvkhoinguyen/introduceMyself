package com.example.introduce.controller;

import com.example.introduce.domain.Message;
import com.example.introduce.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> createMessage(@RequestBody Message message) {
        Map<String, Object> response = new HashMap<>();
        
        if (message.getName() == null || message.getEmail() == null || message.getMessage() == null) {
            response.put("success", false);
            response.put("error", "Vui lòng điền đầy đủ thông tin: Họ tên, Email và Lời nhắn.");
            return ResponseEntity.badRequest().body(response);
        }

        Message savedMessage = messageService.saveMessage(message);
        
        response.put("success", true);
        response.put("message", "Cảm ơn bạn! Lời nhắn của bạn đã được gửi thành công tới Lê Võ Khôi Nguyên.");
        response.put("data", savedMessage);
        
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getMessages() {
        List<Message> messages = messageService.getAllMessages();
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("count", messages.size());
        response.put("messages", messages);
        return ResponseEntity.ok(response);
    }
}
