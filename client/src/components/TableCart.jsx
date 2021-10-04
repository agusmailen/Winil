//React
import React, { useState } from 'react';
//React-Redux
import { connect } from 'react-redux';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
//Components
import Header from './TableCartHeader';
import Toolbar from './ToolbarCart';
import ButtonMercadoPago from './ButtonMercadoPago';
//Styles
import '../assets/styles/components/TableCart.scss';

function createData(name, duration, cost, _id) {
	return { name, duration, cost, _id };
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	paper: {
		width: '60%',
		marginBottom: theme.spacing(2),
		backgroundColor: '#F7F7F7',
		border: 'none',
		boxShadow: 'none',
	},
	table: {
		minWidth: 'auto',
		fontFamily: 'Raleway',
		padding: 0,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

const TableCart = (props) => {
	const { items } = props;
	const [selected, setSelected] = useState([]);
	const rows = items.map((item) => createData(item.title, item.duration, item.cost, item._id));
	const classes = useStyles();
	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n._id);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};
	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];
		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
			console.log('jeje');
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
			selected.slice(0, selectedIndex),
			selected.slice(selectedIndex + 1),
			);
		}
		setSelected(newSelected);
	};
	const isSelected = (name) => selected.indexOf(name) !== -1;
	let total = 0;
	return (
		<div className={classes.root} id='table_id'>
			<Paper className={classes.paper}>
				<Toolbar numSelected={selected.length} selected={selected} />
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby='tableTitle'
						size='medium'
						aria-label='enhanced table'
					>
						<Header
							numSelected={selected.length}
							onSelectAllClick={handleSelectAllClick}
							rowCount={rows.length}
						/>
						<TableBody>
							{rows.map((row, index) => {
								const { name, cost, _id } = row;
								const isItemSelected = isSelected(_id);
								const labelId = `enhanced-table-checkbox-${index}`;
								total += row.cost;
								return (
									<React.Fragment key={_id}>
										<TableRow
											hover
											onClick={(event) => handleClick(event, _id)}
											role='checkbox'
											aria-checked={isItemSelected}
											tabIndex={-1}
											selected={isItemSelected}
										>
											<TableCell padding='checkbox'>
												<Checkbox
													checked={isItemSelected}
													inputProps={{ 'aria-labelledby': labelId }}
												/>
											</TableCell>
											<TableCell component='th' id={labelId} scope='row' padding='none' width='100px'>
												{name}
											</TableCell>
											<TableCell align='right' width='90px'>{cost}</TableCell>
											<TableCell align='right' width='90px'>
												$
												{cost}
											</TableCell>
										</TableRow>
									</React.Fragment>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
			<div className='tableCart-total-button'>
				<h3>
					TOTAL:

					$
					{total}
				</h3>
				<ButtonMercadoPago items={items} id='button-mercadoPago' />
			</div>
		</div>
	);
};

export default connect()(TableCart);