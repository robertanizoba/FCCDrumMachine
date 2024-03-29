import React from 'react';
import './volume-slider.scss';
import Volume from '../../speaker-filled-audio-tool.svg'

class VolumeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentVolume: 50,
        }
    }

    onVolumeChange = (e) => {
        const currentVolumeSetting = e.target.value;
        this.props.onVolumeChange(currentVolumeSetting);
        this.setState({currentVolume: currentVolumeSetting})
    }

    render() {
        const isVolumeEnabled = this.props.isEnabled;
        return(
            <div id='slider-container'>
                    <input name='volume' 
                        className={ isVolumeEnabled ? 'volume-slider' : 'volume-slider disabled'}
                        disabled={!isVolumeEnabled}
                        type='range' min='0' 
                        max='100' 
                        defaultValue='50'
                        step='10'
                        onChange={this.onVolumeChange} />
                    <div id='volume-container' className={this.props.isEnabled ? '' : 'disabled'}>
                        <img src={Volume} />
                        <label for='volume'>{this.state.currentVolume}</label>
                    </div>
            </div>
        );
    }
}

export default VolumeControl;