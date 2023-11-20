import TodayWaterListItem from "../TodayWaterListItem/TodayWaterListItem"
import Icon from "components/common/Icon";
import { color } from "styles/colors";   
import { TodayWaterListContainer, TodayWaterListHeader, TodayWaterListing, AddWaterButton,TodayWaterListItemContainer } from "./TodayWaterList.styled"
import WaterRatioPanel from "components/WaterRatioPanel";
import { useDispatch, useSelector } from "react-redux";
import { dataTodaySelector, selectIsLoading } from "store/waterData/selectors";
import Loader from "components/common/Loader";
import { todayListModalOpen } from "store/waterData/waterDataSlice";
import { useContext } from "react";
import { ModalContext } from "components/common/ModalProvider/ModalProvider";
import TodayListModal from "components/TodayListModal/TodayListModal";


// const waterItems = [ {
//         "_id": "654e2ea72de1793f78f30405",
//         "dosage": 350,
//         "time": "8:00",
//         "day": 19,
//         "month": "November"
//     },
//     {
//         "_id": "654e2eb02de1793f78f30407",
//         "dosage": 350,
//         "time": "10:00",
//         "day": 19,
//         "month": "November"
//     },
//]


const TodayWaterList = () => {
    const toggleModal = useContext(ModalContext);
    const waterItems = useSelector(dataTodaySelector)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()

      
 const handleClickAdd = () => {
        // console.log(id);
        //  dispatch(todayListModalOpen())
     toggleModal(<TodayListModal/>)
    }
    //console.log(waterItems);


    return <TodayWaterListContainer>
        {isLoading && <Loader/>}
        <TodayWaterListHeader>Today</TodayWaterListHeader>
        <TodayWaterListing>
            {waterItems.map(waterItem => <TodayWaterListItemContainer key={waterItem._id}><TodayWaterListItem waterInfo={waterItem} /></TodayWaterListItemContainer>)}
        </TodayWaterListing>
        <AddWaterButton onClick={handleClickAdd}> <Icon name="plus" stroke={color.primary.blue } /> Add Water</AddWaterButton>
    </TodayWaterListContainer>
}

export default TodayWaterList