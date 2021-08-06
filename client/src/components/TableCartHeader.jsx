import React from 'react';
//Material UI
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const headCells = [
	{ id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
	{ id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
	{ id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
	{ id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
	{ id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];
const TableHeader = (props) => {
	const { onSelectAllClick, numSelected, rowCount } = props;
	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': 'select all desserts' }}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						component='th'
						scope='row'
					>
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;