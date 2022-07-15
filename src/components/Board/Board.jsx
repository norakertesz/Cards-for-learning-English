import Cards from "../Cards/cards"
import "./Board.css"

function Board(){
return(
<div>
<table className="tableBoard">
<tr>
<td><Cards frontSide="drink" backSide="drank"/></td>
 <td><Cards frontSide="run" backSide="ran"/></td>
 <td><Cards frontSide="awake" backSide="awoke"/></td>
 <td><Cards frontSide="be" backSide="was,were"/></td>
 <td><Cards frontSide="become" backSide="became"/></td>
 <td><Cards frontSide="bite" backSide="bit"/></td>
 <td><Cards frontSide="break" backSide="broke"/></td>
 </tr>
 <tr>
 
 <td><Cards frontSide="bring" backSide="brought"/></td>
 <td><Cards frontSide="buy" backSide="bought"/></td>
 <td><Cards frontSide="catch" backSide="caught"/></td>
 <td><Cards frontSide="choose" backSide="chose"/></td>
 <td><Cards frontSide="come" backSide="came"/></td>
 <td><Cards frontSide="cost" backSide="cost"/></td>
 <td><Cards frontSide="cut" backSide="cut"/></td>
 </tr>
 <tr>
 <td><Cards frontSide="draw" backSide="drew"/></td>
 <td><Cards frontSide="drive" backSide="drove"/></td>
 <td><Cards frontSide="eat" backSide="ate"/></td>
 <td><Cards frontSide="fall" backSide="fell"/></td>
 <td><Cards frontSide="feel" backSide="felt"/></td>
 <td><Cards frontSide="do" backSide="did"/></td>
 <Cards frontSide="find" backSide="found"/>
 </tr>
 <tr>
 <td><Cards frontSide="fly" backSide="flew"/></td>
 <td> <Cards frontSide="give" backSide="gave"/></td>
 <td><Cards frontSide="write" backSide="wrote"/></td>
 <td><Cards frontSide="understand" backSide="understood"/></td>
 <td><Cards frontSide="wear" backSide="wore"/></td>
 <td><Cards frontSide="sleep" backSide="slept"/></td>
 <td> <Cards frontSide="sing" backSide="sang"/></td>

 </tr>
 <tr>
 <td><Cards frontSide="think" backSide="thought"/></td>
 <td> <Cards frontSide="know" backSide="knew"/></td>
 <td><Cards frontSide="leave" backSide="left"/></td>
 <td><Cards frontSide="lead" backSide="led"/></td>
 <td><Cards frontSide="swim" backSide="swam"/></td>
 <td><Cards frontSide="hit" backSide="hit"/></td>
 <td> <Cards frontSide="have" backSide="had"/></td>

 </tr>
 
 </table>
 </div> )
}

export default Board;