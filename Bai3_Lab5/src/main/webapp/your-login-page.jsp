
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Những phần còn lại của mã HTML -->
</head>
<body>
<div id="login">
    <div class="container">
        <div class="signin">
            <h1 class="title">Sign In</h1>
            <form method="post" action="<c:url value='/check'/>">
                <!-- ... Form fields và nút Submit ... -->
                <label class="error">${error}</label>
            </form>
            <!-- ... Các phần khác của trang ... -->
        </div>
    </div>
</div>
</body>
</html>
