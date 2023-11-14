import { DailyNormaButton, DailyNormaContainer, DailyNormaContainerWaterStat, DailyNormaHeader, DailyNormaWaterNorma } from "./DailyNorma.styled"

const DailyNorma = () => {
    return <DailyNormaContainer>
        <DailyNormaHeader>My daily norma</DailyNormaHeader>
            <DailyNormaContainerWaterStat>
                <DailyNormaWaterNorma>1.5L</DailyNormaWaterNorma>
                <DailyNormaButton>Edit</DailyNormaButton>
            </DailyNormaContainerWaterStat>
        </DailyNormaContainer>
}

export default DailyNorma