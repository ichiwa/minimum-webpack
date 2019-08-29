import * as React from "react";
import { Button, UncontrolledPopover } from 'reactstrap';
import { SketchPicker } from 'react-color';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
  const colorButtonId1 = 'colorbuttonid1';
  const colorButtonId2 = 'colorbuttonid2';
  const [color, setColor] = React.useState(undefined);
  return (<>
    <Button id={colorButtonId1} type="button" color="light">
      <div style={{ backgroundColor: color || 'transparent' }}>&nbsp;</div>
    </Button>
    <UncontrolledPopover trigger="legacy" placement="bottom" target={colorButtonId1}>
      <SketchPicker
        onChange={({ rgb: { r, g, b, a } }) =>
          setColor(`rgba(${r},${g},${b},${a})`)
        }
        color={color}
      />
    </UncontrolledPopover>
    <br />
    <Button id={colorButtonId2} type="button" color="light">
      <div style={{ backgroundColor: color || 'transparent' }}>&nbsp;</div>
    </Button>
    <UncontrolledPopover trigger="legacy" placement="bottom" target={colorButtonId2}>
      <SketchPicker
        onChange={({ rgb: { r, g, b, a } }) =>
          setColor(`rgba(${r},${g},${b},${a})`)
        }
        color={color}
      />
    </UncontrolledPopover>
  </>);
}
