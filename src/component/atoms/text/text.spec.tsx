import { render, screen } from '@testing-library/react';

import { Text } from './index';

describe('Text Atom component', () => {
  const component = <Text
      role="textComponent"
      bg="softgray"
      fontSize="12px"
      m="1rem"
      flexGrow={1}
      borderWidth="1px"
      height="1px"
      width="1px"
      textShadow="2px 2px"
      fontWeight="bold"
      itemhover={true}
      sameline={true}
      wordWrap={true}
      hoverColor="gray"
    />;

  it('should render text component correctly', () => {
    render(component);

    expect(screen.getByRole('textComponent')).toBeInTheDocument();
  });

  it('should component text receive all props', () => {
    expect(component.props.bg).toEqual('softgray');
    expect(component.props.fontSize).toEqual('12px');
    expect(component.props.m).toEqual('1rem');
    expect(component.props.flexGrow).toEqual(1);
    expect(component.props.borderWidth).toEqual('1px');
    expect(component.props.height).toEqual('1px');
    expect(component.props.width).toEqual('1px');
    expect(component.props.textShadow).toEqual('2px 2px');
    expect(component.props.fontWeight).toEqual('bold');
    expect(component.props.itemhover).toEqual(true);
    expect(component.props.sameline).toEqual(true);
    expect(component.props.wordWrap).toEqual(true);
    expect(component.props.hoverColor).toEqual('gray');
  });
});
