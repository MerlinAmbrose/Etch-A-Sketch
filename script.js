const container = document.getElementById("container");

function makeGrid() {
    let e = document.getElementById('e').value;
    container.style.setProperty('--grid-rows', e);
    container.style.setProperty('--grid-cols', e);
    for (c = 0; c < (e * e); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener('mouseover', e => e.target.classList.add('color'))
    };
  };
  


  
  








