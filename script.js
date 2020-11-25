'use strict';

const app = angular.module('app', []);

app.controller('formCtrl', ($scope) => {
  $scope.formErrors = { hasErrors: false };
  $scope.faculty = 'Chimie';

  $scope.chemistryObjects = [
    'Cinetica Chimică',
    'Termodinamica Chimică',
    'Chimia nemetalelor'
  ];

  $scope.computerScienceObjects = [
    'Java',
    'Programarea Web',
    'Ingineria programării'
  ];

  $scope.mathObjects = ['Algebră', 'Algebră liniară', 'Geometrie analitică'];

  $scope.biologyObjects = [
    'Morfologia plantelor',
    'Microbiologia',
    'Etologia ecologică'
  ];

  $scope.teachingSubject = $scope.chemistryObjects[0];

  $scope.handleFacultyChange = (faculty) => {
    switch (faculty) {
      case 'Chimie':
        $scope.teachingSubject = $scope.chemistryObjects[0];
        break;
      case 'Informatica':
        $scope.teachingSubject = $scope.computerScienceObjects[0];
        break;
      case 'Matematica':
        $scope.teachingSubject = $scope.mathObjects[0];
        break;
      case 'Biologie':
        $scope.teachingSubject = $scope.biologyObjects[0];
        break;
    }
  };

  $scope.handleSubmit = () => {
    const {
      firstName,
      lastName,
      salary,
      birthDate,
      isGenderMale,
      isGenderFemale,
      faculty,
      teachingSubject
    } = $scope;

    $scope.formErrors = validateForm({
      firstName,
      lastName,
      salary,
      birthDate,
      isGenderFemale,
      isGenderMale
    });

    if (!$scope.formErrors.hasErrors) {
      $scope.formResult = {
        firstName: `Nume: ${firstName}`,
        lastName: `Prenume: ${lastName}`,
        birthDate:
          birthDate && `Data nașterii: ${birthDate.toLocaleDateString()}`,
        gender: `Genul: ${isGenderMale ? 'Masculin' : 'Feminin'}`,
        faculty: `Facultatea: ${faculty}`,
        teachingSubject: `Obiectul Predării: ${teachingSubject}`,
        salary: `Salariu Dorit: ${salary}`
      };
    }
  };

  $scope.handleReset = (e) => {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.salary = '';
    $scope.birthDate = null;
    $scope.isGenderMale = false;
    $scope.isGenderFemale = false;
    $scope.faculty = 'Chimie';
    $scope.teachingSubject = $scope.chemistryObjects[0];
    $scope.formErrors = { hasErrors: false };
    $scope.formResult = null;
  };
});
