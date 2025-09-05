import styles from './FeatureItem.module.css';
import { CustomSvg } from '@/components/CustomSvg/CustomSvg';
import spriteUrl from '../../img/icons.svg?url';
import { FeatureKey, icons } from '@/constants';

export function FeatureItem({ text, iconName, style, svgStyle }: {
    text: string,
    iconName: FeatureKey,
    style?: any,
    stroke?: string,
    svgStyle?: any,
}) {
    return (
        <span style={style} className={styles.cardFeature}><CustomSvg width={20} height={20} style={svgStyle}
                                                                      spriteUrl={`${spriteUrl}#${icons[iconName]}`}/>{text}</span>
    );
}