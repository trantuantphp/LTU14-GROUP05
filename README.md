# LTU14-GROUP05

Project Chat 

1. Thành viên nhóm
    Trần Đức Tuấn
    Nguyễn Mạnh Tuấn
    Nguyễn Đức Long
    Đỗ Việt Hưng

2. Đặc điểm project
    Hệ thống phân tán
    Ngôn ngữ lập trình sử dụng: JavaScript
    Các thành phần
        Server: nodejs + mysql + socket.io
        Client: reactjs + socket.io
    Chức năng chính
        Đăng kí/Đăng nhập
        Chat riêng - Chat nhóm
        Gửi tin nhắn real-time
        Tin nhắn dạng text, emoji, file
    Triển khai:
        VPS: Project đẫ triển khai và chạy trên VPS
        Docker: Đã triển khai thành công với docker

3. Hướng dẫn cài đặt
    1. Server
        Branch: backend
        Source code và file docker trong thư mục backend
        Source code
            Clone về máy 
            Vào thư mục code chạy cmd: npm i
            Sau đó chạy tiếp lệnh: npm start
        Docker
            docker pull trantuantphp/chat-dds:backend
            docker run -p 8282:8282 -v /tmp/uploads:/home/backend/uploads -it trantuantphp/chat-dds:backend /bin/bash
            npm start
    2. Client - Chat
        Branch: frontend/chat
        Source code và file docker trong thư mục frontend-chat
        Source code
            Clone về máy 
            Vào thư mục code chạy cmd: npm i
            Sau đó chạy tiếp lệnh: npm start
        Docker
            docker pull trantuantphp/chat-dds:frontend-chat
            docker run -p 3030:3030 -it trantuantphp/chat-dds:frontend-chat /bin/bash
            npm start
    3. Client - CMS
        Branch: cms/login
        Source code và file docker trong thư mục frontend-cms
        Source code
            Clone về máy 
            Vào thư mục code chạy cmd: npm i
            Sau đó chạy tiếp lệnh: npm start
        Docker
            docker pull trantuantphp/chat-dds:frontend-cms
            docker run -p 3030:3030 -it trantuantphp/chat-dds:frontend-cms /bin/bash
            npm start