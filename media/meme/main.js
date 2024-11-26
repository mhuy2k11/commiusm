    // Dữ liệu file mẫu (thay thế bởi backend thực tế)  
    const files = [  
        { name: "Image1.jpg", type: "image/jpeg", url: "path/to/Image1.jpg" },  
        { name: "Video1.mp4", type: "video/mp4", url: "path/to/Video1.mp4" },  
        { name: "Audio1.mp3", type: "audio/mpeg", url: "path/to/Audio1.mp3" },  
        { name: "Image2.png", type: "image/png", url: "path/to/Image2.png" }  
    ];  

    function loadFiles() {  
        const fileList = document.getElementById("file-list");  
        fileList.innerHTML = ''; // Xóa danh sách cũ  

        files.forEach(file => {  
            const listItem = document.createElement("li");  
            listItem.textContent = file.name;  
            listItem.onclick = () => showPreview(file);  
            fileList.appendChild(listItem);  
        });  
    }  

    function showPreview(file) {  
        const previewContainer = document.getElementById("file-preview");  
        previewContainer.innerHTML = ''; // Xóa nội dung cũ  

        if (file.type.startsWith('image/')) {  
            const img = document.createElement("img");  
            img.src = file.url;  
            previewContainer.appendChild(img);  
        } else if (file.type.startsWith('video/')) {  
            const video = document.createElement("video");  
            video.src = file.url;  
            video.controls = true;  
            previewContainer.appendChild(video);  
        } else if (file.type.startsWith('audio/')) {  
            const audio = document.createElement("audio");  
            audio.src = file.url;  
            audio.controls = true;  
            previewContainer.appendChild(audio);  
        } else {  
            previewContainer.textContent = "Định dạng file không hỗ trợ xem trước.";  
        }  
    }  

    // Gọi hàm để tải các file khi trang được load  
    loadFiles();  