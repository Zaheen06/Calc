let display=''
function calculate(value)
{
  if(value == '=')
  display=eval(display)
  else if(value == 'C')
  display=''
  else
  display+=value
  document.getElementById('display').value=display

}