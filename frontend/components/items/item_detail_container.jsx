import { connect } from "react-redux";
import { itemDetail } from "./item_detail";

const mapStateToProps = (state, ownProps) => ({
    item: state.entities.items,
    ownProps: ownProps
})

export default connect(mapStateToProps, null)(itemDetail)



