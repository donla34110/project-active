function toggleham(x) {
    x.classList.toggle("change");

    let Mymenu = document.getElementById('Mymenu');
    if (Mymenu.className === 'menu'){
        Mymenu.className += ' active'
    }else{
        Mymenu.className = 'menu';
    }
  }