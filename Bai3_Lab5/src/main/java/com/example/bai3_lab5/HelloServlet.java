package com.example.bai3_lab5;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;


public class HelloServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if (username.isEmpty() || password.isEmpty()) {
            // Hiển thị thông báo nếu tên hoặc mật khẩu trống
            request.setAttribute("error", "Vui lòng nhập tên và mật khẩu.");
            request.getRequestDispatcher("your-login-page.jsp").forward(request, response);
        } else if (yourAuthenticationLogic(username, password)) {
            // Xác thực thành công, chuyển hướng đến trang chào mừng
            response.sendRedirect("welcome.jsp");
        } else {
            // Xác thực không thành công, hiển thị thông báo lỗi
            request.setAttribute("error", "Tên hoặc mật khẩu không đúng.");
            request.getRequestDispatcher("your-login-page.jsp").forward(request, response);
        }
    }

    // Hàm xác thực người dùng, bạn cần triển khai logic xác thực thực tế ở đây
    private boolean yourAuthenticationLogic(String username, String password) {
        // Điều kiện xác thực người dùng
        // Thay thế hàm này bằng logic xác thực của bạn
        return username.equals("user") && password.equals("password");
    }
}

