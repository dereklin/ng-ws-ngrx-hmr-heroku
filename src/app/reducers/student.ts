import * as student from '../actions/student';

export interface State {
  students: any[];
  loading: boolean;
  selectedStudent: any;
}

const initialState: State = {
  students: [],
  loading: false,
  selectedStudent: null
};

export function reducer(state = initialState, action: student.Actions): State {
  switch (action.type) {
    case student.ActionTypes.LOAD_STUDENTS: {
      return {
        students: action.payload,
        loading: true,
        selectedStudent: state.selectedStudent
      };
    }
    case student.ActionTypes.STOP_LOADING: {
      return {
        students: state.students,
        loading: false,
        selectedStudent: state.selectedStudent
      };
    }
    case student.ActionTypes.SELECT_STUDENT: {
      const mySelecctedStudent = state.students[action.payload];
      return {
        students: state.students,
        loading: state.loading,
        selectedStudent: mySelecctedStudent
      };
    }
    default: {
      return state;
    }
  }
}

export const getStudents = (state: State) => state.students;

export const getSelectedStudent = (state: State) => state.selectedStudent;
