# Icy Modal Component

A customizable and elegant modal component for React, inspired by **Ant Design**, with support for overlay, customizable title, two buttons (Confirm & Close),  The modal is centered horizontally and slightly offset vertically with a backdrop preventing interaction with other elements.

## Features

- **Customizable Title and Content**: You can pass your own title and content into the modal.
- **Overlay (Backdrop)**: The modal includes a backdrop, which blocks interaction with the rest of the page until closed.
- **Two Action Buttons**: The modal provides two buttons (Confirm and Close) by default, both configurable.
- **Fixed Positioning**: The modal always appears centered on the screen.
- **Flexible Style**: The modal's appearance can be customized to suit your design requirements, similar to popular UI libraries like **Ant Design** or **Element Plus**.

## Installation

To install this component in your React project, run the following command:

```bash
npm install icy-modal
```

or using yarn:

```bash
yarn add icy-modal
```

## Usage

Below is an example of how to use the modal in a React project:

```jsx
import React, { useState } from 'react';
import Modal from './icy-modal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const confirmModal = () => {}

  return (
    <div style={{ padding: '20px' }}>
      <h1>Modal Component Example</h1>
      <button onClick={openModal}>打开弹窗</button>
      <Modal
        visible={modalVisible}
        onClose={closeModal}
        onConfirm={confirmModal}
        width="600px"
        title="这是一个弹窗"
        content="这里是弹窗的内容。"
        isOkText="确定"
        isOkColor="#cba4d9"
        isCancelText="关闭"
      />
    </div>
  );
};

export default App;
```

## Props

The modal component accepts the following props:

| Prop         | Type     | Default       | Description                                                   |
|--------------|----------|---------------|---------------------------------------------------------------|
| `title`      | `string` | `Modal Title` | The title of the modal, displayed at the top of the modal.     |
| `visible`    | `boolean`| `false`       | Controls whether the modal is visible or hidden.               |
| `onConfirm`  | `func`   | `undefined`   | Callback function for when the confirm button is clicked.      |
| `onClose`    | `func`   | `undefined`   | Callback function for when the close button is clicked.        |
| `children`   | `node`   | `null`        | The content inside the modal.                                  |
| `width`      | `string` | `undefined`   | Set modal width.                                               |
| `isOkText`   | `string` | `undefined`   | Set ok text.                                                   |
| `isCancelText` | `string` | `undefined` | Set cancel text.                                               |
| `isOkColor`  | `string`   | `undefined` | The ok button color.                                           |

## License

This project is licensed under the MIT License.


## Preview

![预览](https://github.com/qinyu312/icy-modal/blob/main/assets/preview-modal.png?raw=true)

---