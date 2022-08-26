import { mount } from 'helloAngularIonic/Component'
import React, { useRef, useEffect } from 'react'
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone.js';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount()
    }, [])

    return <hello-angular-ionic-app-root />
}