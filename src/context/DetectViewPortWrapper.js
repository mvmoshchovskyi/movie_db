import React, {Component} from 'react';

const viewPorts = {
    desktop: 'desktop',
    tablet: 'tablet',
    mobile: 'mobile'
}
const DESKTOP_WIDTH = 1200;
const TABLET_WIDTH = 800;
const MOBILE_WIDTH = 678;

export class DetectViewPortWrapper extends Component {
    state = {
        viewport: viewPorts.desktop
    }

    componentDidMount() {
        window.addEventListener('resize',this.updeteViewPort)
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.updeteViewPort)
    }


    updeteViewPort = () => {

        const width = window.innerWidth
        let viewport = viewPorts.desktop

        if (width >= viewPorts.desktop) {
            viewport = viewPorts.desktop
        } else if (width >= viewPorts.tablet) {
            viewport = viewPorts.tablet
        } else {
            viewport = viewPorts.mobile
        }
        this.setState({
            viewport
        })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


