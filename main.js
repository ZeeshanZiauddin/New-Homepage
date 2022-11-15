
let check = document.getElementById('menucheck').checked = false;
let click = false;

document.getElementById("menu").addEventListener('click', () => {

    check = !check;
    if (check == true) {
        document.getElementById('nav').style.display = 'block';
        document.getElementById("breadcrumb").style.display = 'none';
        document.getElementById("close").style.display = 'block';
        document.getElementById('menulist').style.right = "0";
    }
    else {

        document.getElementById('nav').style.display = 'none';
        document.getElementById("breadcrumb").style.display = 'block';
        document.getElementById("close").style.display = 'none';
        document.getElementById('menulist').style.right = '-100%';
    }


}
);

