
import { Radio } from '@material-tailwind/react';
import { useState } from 'react';

export function Radiolist() {
  const [bodyColor, setBodyColor] = useState('#000000'); 
  const [colorname , setColorName] = useState()

  function changecolor(color , colorName) {
    setBodyColor(color);
    setColorName(colorName);

    document.body.style.backgroundColor = color;
    document.body.style.background = colorName;
  }

  return (
    <div className="flex mx-auto  w-max gap-4">
      <Radio name="color" value="teal" onClick={() => changecolor('teal')} color="teal" />
      <Radio name="color" value="cyan" onClick={() => changecolor('cyan')} color="cyan" />
      <Radio name="color" value="gray" onClick={() => changecolor('gray')} color="gray" defaultChecked />
      <Radio name="color" value="blue" onClick={() => changecolor('blue')} color="blue" />
      <Radio name="color" value="green" onClick={() => changecolor('green')} color="green" />
      <Radio name="color" value="red" onClick={() => changecolor('red')} color="red" />
      <Radio name="color" value="yellow" onClick={() => changecolor('yellow')} color="yellow" />
      <Radio name="color" value="purple" onClick={() => changecolor('purple')} color="purple" />
      <p id='colorname'></p>
    </div>
  );
}
