import { TrackerWrapper, WelcomeTitle, WelcomeSubTitle, BenefitsTitle, BenefitsList, BenefitsItem, BenefitsInfo, TryTrackerBtn, TryTrackerLink} from './WaterTracker.styled'
import Icon from 'components/Icon';
import { color } from 'styles/colors';


const WelcomeTracker = () => {
    const iconWidth = window.screen.width > 768 ? 40 : 32;

    return (
        <TrackerWrapper>
            <WelcomeTitle>Water consumption tracker</WelcomeTitle>
            <WelcomeSubTitle>Record daily water intake and track</WelcomeSubTitle>
            <BenefitsTitle>Tracker Benefits</BenefitsTitle>
            <BenefitsList>
                <BenefitsItem>
                    <Icon name={"calendar"} width={iconWidth} height={iconWidth} stroke={color.primary.brue}></Icon>
                    <BenefitsInfo>Habit drive</BenefitsInfo>
                </BenefitsItem>
                <BenefitsItem>
                    <Icon name={"graphic"} width={iconWidth} height={iconWidth} stroke={color.primary.brue}></Icon>
                    <BenefitsInfo>View statistics</BenefitsInfo>
                </BenefitsItem>
                <BenefitsItem>
                    <Icon name={"tools"} width={iconWidth} height={iconWidth} stroke={color.primary.brue}></Icon>
                    <BenefitsInfo>Personal rate setting</BenefitsInfo>
                </BenefitsItem>
            </BenefitsList>
            <TryTrackerBtn>
                <TryTrackerLink to="/">Try Tracker</TryTrackerLink>
            </TryTrackerBtn>
        </TrackerWrapper>
        
    )
}
 
export default WelcomeTracker;