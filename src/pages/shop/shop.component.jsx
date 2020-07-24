import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render() {
		const { match, selectIsCollectionsLoaded } = this.props;

		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={!selectIsCollectionsLoaded}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={!selectIsCollectionsLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	selectIsCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
