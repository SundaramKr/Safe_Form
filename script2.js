function input () {
    const name = document.getElementById('userinput').value;
    const name2=sessionStorage.getItem('NAME');
    if(name===name2)
    window.open("warning.html","_self");
    else{

    // to set into local storage
    /* localStorage.setItem("NAME", name); */
    
    sessionStorage.setItem("NAME", name);

    window.open("form.html","_self");

    return;}
}