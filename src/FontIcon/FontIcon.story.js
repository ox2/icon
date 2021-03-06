import React from 'react';
import { storiesOf } from '@storybook/react';
import FontIcon from './FontIcon';

storiesOf('FontIcon', module)
  .add('default', () =>
    <FontIcon group="module" icon="users2" />,
  )
  .add('colored', () =>
    <FontIcon
      color="#2CAF65"
      group="module"
      icon="users2"
    />,
  )
  .add('colored & large', () =>
    <FontIcon
      color="#2CAF65"
      group="module"
      icon="users2"
      size="35px"
    />,
  )
  .add('ui group', () =>
    <FontIcon
      color="#2CAF65"
      group="ui"
      icon="move"
      size="35px"
    />,
  )
  .add('icon packs', () =>
    <div>
      <div>
        <FontIcon
          color="#2CAF65"
          group="moon"
          icon="arrow-right"
          size="35px"
        />
        <div>Moon</div>
      </div>
      <div>
        <FontIcon
          color="#2CAF65"
          group="linear"
          icon="couch"
          size="35px"
        />
        <div>Linear</div>
      </div>
      <div>
        <FontIcon
          color="#2CAF65"
          group="material"
          icon="border_style"
          size="35px"
        />
        <div>Material</div>
      </div>
    </div>,
  )
  .add('style object', () =>
    <FontIcon
      color="#FFFFFF"
      group="module"
      icon="users2"
      size="35px"
      style={{
        backgroundColor: 'mediumvioletred',
        padding: '10px',
      }}
    />,
  )
  .add('themed', () =>
    <FontIcon
      className="text-color:twitter"
      group="module"
      icon="users2"
      size="35px"
    />,
  );
