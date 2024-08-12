import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import Navigation from '../../../layout/Navigation/Navigation';
import {supperaddminmenu} from '../../../menu';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import CommonHeaderRight from './CommonHeaderRight';


const MyDefaultHeader = () => {
	const deviceScreen = useDeviceScreen();
	return (
		<Header>
			<HeaderLeft>
			<div></div>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default MyDefaultHeader;
