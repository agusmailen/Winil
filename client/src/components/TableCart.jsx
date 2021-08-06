//React
import React from 'react';
//React-Redux
import { connect } from 'react-redux';
//Style
import '../assets/styles/components/TableCart.scss';
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

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '70%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
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

const TableCart = () => {
	const rows = [
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Donut', 452, 25.0, 51, 4.9),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	];
	const classes = useStyles();
	const [selected, setSelected] = React.useState([]);
	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.name);
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

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Toolbar numSelected={selected.length} />
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
								const isItemSelected = isSelected(row.name);
								const labelId = `enhanced-table-checkbox-${index}`;
								return (
									<TableRow
										hover
										onClick={(event) => handleClick(event, row.name)}
										role='checkbox'
										aria-checked={isItemSelected}
										tabIndex={-1}
										key={row.name}
										selected={isItemSelected}
									>
										<TableCell padding='checkbox'>
											<Checkbox
												checked={isItemSelected}
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</TableCell>
										<TableCell component='th' id={labelId} scope='row' padding='none'>
                        					{row.name}
										</TableCell>
										<TableCell align='right'>{row.calories}</TableCell>
										<TableCell align='right'>{row.fat}</TableCell>
										<TableCell align='right'>{row.carbs}</TableCell>
										<TableCell align='right'>{row.protein}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default connect()(TableCart);