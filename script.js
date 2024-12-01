function showDirectory(directory) {
    // 메인 페이지를 숨기고 서브 디렉토리 페이지를 보여줌
    document.querySelector('h1').innerText = `Index of /${directory}`;
    document.getElementById('file-list').style.display = 'none';
    document.getElementById('subdirectory').style.display = 'block';

    // 서브 디렉토리 목록
    let files = [];
    
    if (directory === 'digksrj') {
        files = [
            { name: 'subfile1.html', size: '1.1 KB', modified: 'Nov 29, 2024' },
            { name: 'subfile2.html', size: '2.2 KB', modified: 'Nov 30, 2024' }
        ];
    }

    const table = document.getElementById('subdirectory-list');
    // 기존 파일 목록을 제거
    table.innerHTML = `<tr>
        <th>File Name</th>
        <th>Size</th>
        <th>Last Modified</th>
    </tr>`;

    // 새 파일 목록 추가
    files.forEach(file => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerHTML = `<a href="${file.name}">${file.name}</a>`;
        cell2.innerText = file.size;
        cell3.innerText = file.modified;
    });
}

function backToMain() {
    // 서브 디렉토리 페이지를 숨기고 메인 페이지를 다시 보여줌
    document.getElementById('subdirectory').style.display = 'none';
    document.getElementById('file-list').style.display = 'block';
}
