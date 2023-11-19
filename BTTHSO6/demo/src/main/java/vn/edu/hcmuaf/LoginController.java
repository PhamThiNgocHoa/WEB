package vn.edu.hcmuaf;

import vn.edu.hcmuaf.bean.User;
import vn.edu.hcmuaf.serice.UserService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet("/login")
public class LoginController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       String email = request.getParameter("email");
       String pass = request.getParameter("pass");
        if(email.equals("admin@gmail.com") && pass.equals("123")){
            request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);

        }
       if(!email.contains("@")){
           request.setAttribute("emailErr", "Email invalible ");
           request.getServletContext().getRequestDispatcher("/login.jsp").forward(request, response);
       }
       if(email.equals("admin@gmail.com") &&!pass.contains("123")){
           request.setAttribute("pass", "passwword Err");
           request.getServletContext().getRequestDispatcher("/login.jsp").forward(request, response);
        }
        if(!email.equals("admin@gmail.com") && !pass.equals("123")){
            request.setAttribute("emailErrs", "Email and pass err ");
            request.getServletContext().getRequestDispatcher("/login.jsp").forward(request, response);
        }
        if(!email.equals("admin@gmail.com") &&pass.contains("123")){
            request.setAttribute("emailErrss", "Email err ");
            request.getServletContext().getRequestDispatcher("/login.jsp").forward(request, response);
        }

    }
}
