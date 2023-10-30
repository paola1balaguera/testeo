const area_box = document.querySelector('.are-box'),
    text = document.querySelector('h2'),
    btn_load = document.querySelector('.btn-seleccionar'),
    input= document.querySelector('.input-file');

btn_load.addEventListener('click', e =>{
    input.click();
});

input.addEventListener('change', e => {
    files = this.files;
    area_box.classList.add('active');
    showFiles(files);
    area_box.classList.remove('active');
})


area_box.addEventListener('dragover', (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    area_box.classList.add('active');
    area_box.textContent = 'suelta para subir los archivos'

});

area_box.addEventListener('dragover', (e) => {
    area_box.classList.add('active');
    area_box.textContent = 'Arrastra y sube las imagenes'
    
});

area_box.addEventListener('dragover', (e) => {
    area_box.classList.add('active');
    area_box.textContent = 'Arrastra y sube las imagenes' 
});

function showFiles(files){
    if(-files.length === undefined){
        processFile(files);
    }
    else{
        for(const file of files){
            processFile(file);
        }
    }
}

function processFile(){
    const doctype = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    if(validExtensions.includes(doctype)){
        //archivo valido
        const fileReader = new fileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`

        fileReader.addEventListener('load', e => {
            const fileUrl = fileReader.result;
            const image = `
                <div id ='${id} class = 'file-container'>
                s
            
            `
        } )

    }
    else{
        //archivo no valido
        alert('No es un archivo valido')
    }

}