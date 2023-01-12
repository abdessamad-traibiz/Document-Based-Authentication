// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

contract AuthDoc{
    struct Student{
        address owner;
        string idDip;
        string cin;
        string diploma;
        string studentName;
        string cne;
        string image;
    }

    mapping(bytes32 => Student) public Students;

    uint256 public numberOfStudents = 0;

    constructor(){}

    function addStudent(Student[] memory students) public returns (bool) {
        for (uint256 i = 0; i < students.length; i++) {
            bytes32 _hash = keccak256(abi.encodePacked(students[i].idDip));
            Students[_hash].owner = students[i].owner;
            Students[_hash].idDip = students[i].idDip;
            Students[_hash].cin = students[i].cin;
            Students[_hash].diploma = students[i].diploma;
            Students[_hash].studentName = students[i].studentName;
            Students[_hash].cne = students[i].cne;
            Students[_hash].image = students[i].image;

            numberOfStudents++;
        }

        return numberOfStudents > 0 ? true : false;
    }

    function add(address _owner, string memory _idDip, string memory _cin, string memory _diploma, string memory _studentName, 
                string memory _cne, string memory _image) public returns (bytes32) {
        // Student storage student = Students[numberOfStudents];

        bytes32 _hash = keccak256(abi.encodePacked(_idDip));
        Students[_hash].owner = _owner;
        Students[_hash].idDip = _idDip;
        Students[_hash].cin = _cin;
        Students[_hash].diploma = _diploma;
        Students[_hash].studentName = _studentName;
        Students[_hash].cne = _cne;
        Students[_hash].image = _image;

        numberOfStudents++;

        return keccak256(abi.encodePacked(_idDip));
    }

    function getStudent(string memory _id) public view returns(string memory idDip) { 
        bytes32 _hash = keccak256(abi.encodePacked(_id));
        return (Students[_hash].idDip);
    }

    function verifyDoc(string memory _id) public view returns(bool) {
        bytes32 _hash = keccak256(abi.encodePacked(_id));
        return bytes(Students[_hash].idDip).length > 0 ? true : false;
    }

    function verifyQrCode(bytes32 _hash) public view returns(bool) {
        return bytes(Students[_hash].idDip).length > 0 ? true : false;
    }

    function downloadDip(string memory _id) public view returns(string memory) {
        bytes32 _hash = keccak256(abi.encodePacked(_id));
        return Students[_hash].image;
    }

    function downloadDipQrCode(bytes32 _hash) public view returns(string memory) {
        return Students[_hash].image;
    }

    // function setStudent(uint256 _id, string memory idDip, string memory cin, string memory diploma, string memory studentName, string memory cne, string memory image) public { 
    //     Students[_id].idDip = idDip;
    //     Students[_id].cin = cin;
    //     Students[_id].diploma = diploma;
    //     Students[_id].studentName = studentName;
    //     Students[_id].cne = cne;
    //     Students[_id].image = image;
    // } 

}