import React from 'react';

export default function useVisibility(initialVisibility = false): [boolean, () => void, () => void] {
    const [visible, setVisible] = React.useState(initialVisibility);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    return [visible, show, hide];
}
