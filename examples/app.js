import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Pet, { Colors, Eyes, Patterns, Bodys, Mouths } from '../';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '日落黄',
      body: '灰太狼',
      bodyColor: '牙黄',
      eye: '小惊讶',
      eyeColors: '浅钴蓝',
      pattern: '奶牛',
      patternColor: '变异橙',
      bellyColor: '深灰',
      mouth: '小獠牙',
    };
  }

  render() {
    const Select = props => {
      const options = Object.keys(props.options).map(key => {
        return (
          <option value={key} key={key}>
            {key}
          </option>
        );
      });
      return (
        <select
          value={this.state[props.name]}
          onChange={e => {
            this.setState({
              [props.name]: e.target.value,
            });
          }}
        >
          {options}
        </select>
      );
    };
    return (
      <div>
        <Select name="bgColor" options={Colors} />
        <Select name="body" options={Bodys} />
        <Select name="bodyColor" options={Colors} />
        <Select name="eye" options={Eyes} />
        <Select name="eyeColor" options={Colors} />
        <Select name="pattern" options={Patterns} />
        <Select name="patternColor" options={Colors} />
        <Select name="bellyColor" options={Colors} />
        <Select name="mouth" options={Mouths} />
        <Pet {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
