let p1 = document.getElementById("s1"),
    p2 = document.getElementById("s2"),
    p3 = document.getElementById("s3"),
    p4 = document.getElementById("s4"),
    p5 = document.getElementById("s5"),
    p6 = document.getElementById("s6"),
    p7 = document.getElementById("s7"),
    p8 = document.getElementById("s8"),
    p9 = document.getElementById("s9"),
    p10 = document.getElementById("s10"),
    p11 = document.getElementById("s11"),
    p12 = document.getElementById("s12");

function setEnabledRed(x1, x2)
{
    x1.setAttribute("class", "red-Position Other-Style-1 red-Enabled");
    x2.setAttribute("class", "red-Position Other-Style-1 red-Enabled");
}
function setDisabledRed(x1, x2)
{
    x1.setAttribute("class", "red-Position red-Disabled Other-Style-1");
    x2.setAttribute("class", "red-Position red-Disabled Other-Style-1");
}
function setEnabledYellow(x1, x2)
{
    x1.setAttribute("class", "yellow-Position yellow-Enabled Other-Style-2");
    x2.setAttribute("class", "yellow-Position yellow-Enabled Other-Style-2");
}
function setDisabledYellow(x1, x2)
{
    x1.setAttribute("class", "yellow-Position yellow-Disabled Other-Style-2");
    x2.setAttribute("class", "yellow-Position yellow-Disabled Other-Style-2");
}
function setEnabledGreen(x1, x2)
{
    x1.setAttribute("class", "green-Position green-Enabled Other-Style-3");
    x2.setAttribute("class", "green-Position green-Enabled Other-Style-3");
}
function setDisabledGreen(x1, x2)
{
    x1.setAttribute("class", "green-Position green-Disabled Other-Style-3");
    x2.setAttribute("class", "green-Position green-Disabled Other-Style-3");
}

function funk1()
{
    setEnabledRed(p1, p10);
    setEnabledGreen(p6, p9);
    console.log("funk 1 zrobiona");
}
function funk2()
{
    setDisabledRed(p1, p10);
    setDisabledGreen(p6, p9);
    console.log("funk 2 zrobiona");
}
function funk3()
{
    setEnabledRed(p1, p10);
    setEnabledYellow(p2, p11);
    setEnabledYellow(p5, p8);
    console.log("funk 3 zrobiona");
}
function funk4()
{
    setDisabledRed(p1, p10);
    setDisabledYellow(p2, p11);
    setDisabledYellow(p5, p8);
    console.log("funk 4 zrobiona");
}
function funk5()
{
    setEnabledRed(p4, p7);
    setEnabledGreen(p3, p12);
    console.log("funk 4 zrobiona");
}
function funk6()
{
    setDisabledGreen(p3, p12);
    console.log("funk 5 zrobiona");
}
function funk7()
{
    setEnabledYellow(p5, p8);
    setEnabledYellow(p2, p11);
    console.log("funk 6 zrobiona");
}
function funk8()
{
    setDisabledRed(p4, p7);
    setDisabledYellow(p5, p8);
    setDisabledYellow(p2, p11);
    console.log("funk 7 zrobiona");
}
function rek()
{
    setTimeout(funk1, 000);
    setTimeout(funk2, 6000);
    setTimeout(funk3, 9000);
    setTimeout(funk4, 13000);
    setTimeout(funk5, 14000);
    setTimeout(funk6, 16000);
    setTimeout(funk7, 17000);
    setTimeout(funk8, 18000);
}
rek();
setInterval(function()
{
    rek();

}, 20000);











