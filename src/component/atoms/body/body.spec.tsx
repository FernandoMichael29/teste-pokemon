import { render, screen } from '@testing-library/react';
import { Body } from '.';

describe('Body Atom component', () => {
  const component = <Body
      role="bodyComponent"
      bg="softgray"
      height="1px"
      flexGrow={1}
      zIndex="1"
      mt="2rem"
    />;

  it('should render body component correctly', () => {
    render(component);

    expect(screen.getByRole('bodyComponent')).toBeInTheDocument();
  });

  it('should component body receive all props', () => {
    expect(component.props.flexGrow).toEqual(1);
    expect(component.props.height).toEqual('1px');
    expect(component.props.bg).toEqual('softgray');
    expect(component.props.mt).toEqual('2rem');
    expect(component.props.zIndex).toEqual('1');
  });
});
