


  //Задание 1
  var matrixExample = [
    [ 1, 2, 3, 4 ],
    [ 4, 5, 6, 5 ],
    [ 7, 8, 9, 7 ],
    [ 7, 8, 9, 7 ]
  ];


  function sumUpDiagonals(matrix) {
    sum=0;
    sum2=0;

    for (i=0; i<matrix.length; i++){
      sum=sum+matrix[i][i]
      sum2=sum2+matrix[matrix.length-i-1][i]
    }
    return sum+sum2
  }
  
  console.log(sumUpDiagonals(matrixExample))
    


 
  //Задание 2
  var mainObj = [
    {
        name: "Аватар",
        time:  "10:00",
        place: "место"
    },
    {
        name: "Дракула",
        time:  "12:00",
        place: "место"
    },
    {
        name: "Гари Потер",
        time:  "14:00",
        place: "место"
    },
    {
      name: "Жау жүрек мың бала",
      time:  "16:00",
      place: "место"
    },
    {
      name: "Гари Потер",
      time:  "18:00",
      place: "место"
    },
    {
      name: "Капитан Америка",
      time:  "20:00",
      place: "место"
    },
];
var k = '<tbody>'
for(i = 0;i < mainObj.length; i++){
    k+= '<tr>';
    k+= '<td>' + mainObj[i].name + '</td>';
    k+= '<td>' + mainObj[i].time + '</td>';
    k+= '<td><a class="popup-trigger">' + mainObj[i].place + '</a></td>';
    k+= '</tr>';
}
k+='</tbody>';
document.getElementById('tableData').innerHTML = k;




$(document).ready(function(){
 

  var fadeInTime = 600; 
  var fadeOutTime = 600;
  var popupWindow = $('#popup-window'); 
 

  function fadein(el) {
    $(el).fadeIn(fadeInTime);
  }
  function fadeout(el) {
    $(el).fadeOut(fadeOutTime);
  }
 
 
  $('.popup-trigger').on('click touchend', function(){
    fadein(popupWindow);
  })
  

  $('.popup-close').on('click touchend', function() {
    fadeout(popupWindow);
  });
 
  $(document).on('mouseup', function(e) {
      if (!popupWindow.is(e.target) 
          && popupWindow.has(e.target).length === 0) 
      {
      fadeout(popupWindow);
      }
  });


  $(document).on('keyup', function(e) {
      if (e.keyCode == 27) { 
      fadeout(popupWindow);
      }
  });

})

one = document.getElementById('one');
two = document.getElementById('two');
one.addEventListener("click", function(){
  one.style.color="red";
  mainObj[i].place=one.value;

})
two.addEventListener("click", function(){
  two.style.color="red";
})

