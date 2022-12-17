const handle = (imports) => {
  const imps = []
  imports.forEach((impData) => {
    if (impData.source.value !== 'react-native-svg') {
      imps.push(impData)
    }
  });
  return imps;
};

const formatName = (param) => {
  const name = param.replace('Svg', '')
  return name + 'Icon' + ': React.FC<IIconProps>'
}


const defaultTemplate = (variables, { tpl }) => {
  const name = formatName(variables.componentName)
  const imports = handle(variables.imports)
  return tpl`
  import { IIconProps } from '../types';
  import { StyledSvg as Svg } from '../styled';
  import { Path } from 'react-native-svg';
  ${imports};
    export const ${name} = (props: IIconProps) => (
      ${variables.jsx}
    );
`
}

module.exports = defaultTemplate