---
title: Endpoints
---

# Introduction
As of the time of the time of writing, there are currently 135 different stats that this package can access from [**The NBA Website.**](https://www.nba.com/stats/)

Each endpoint gives information about the data it returns, parameters that the endpoint takes and sample results. 

* * * * *

!!! tip Tip
To get all the arguments that an endpoint can return, use `.expected_data.keys()`
!!!

**Example**

``` python
from nba_api.stats.endpoints import commonplayerinfo
doncic_data = commonplayerinfo.CommonPlayerInfo(1629029)
doncic_data.expected_data.keys()
```

This returns all the arguments the `commonplayerinfo` endpoint can take. 
```text
dict_keys(['AvailableSeasons', 'CommonPlayerInfo', 'PlayerHeadlineStats'])
```

<!-- ::: danger WARNING
Some of these do not have sample results included and you can use the contact page to find avenues to get solutions to problems. 
::: -->

------ 

## All Time stats

### AllTimeLeadersGrids
This Endpoint returns All time leaders for different stats in the NBA. 

``` python
from nba_api.stats.endpoints import alltimeleadersgrids
alltimeleadersgrids.AllTimeLeadersGrids()
```

#### Query Parameters 
API Parameter Name | Python Parameter Variable | Description | Status | Nullable
------------ | ------------ | :-----------: | :---: | :---:
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id | Options include NBA, ABA, G league, WNBA. | `Required` | Defaults to NBA. | 
[_**PerMode**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PerMode) | per_mode_simple | Options include total, per 36 minutes or per game  | `Required` | Defaults to total. | 
[_**SeasonType**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#SeasonType) | season_type | Other options include regular season or preseason. | `Required` | Defaults to regular season. | 
[_**TopX**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#TopX) | topx | No info available | `Required` | No info available | 

#### Arguments Taken
``` text
['ASTLeaders', 'BLKLeaders', 'DREBLeaders', 'FG3ALeaders', 'FG3MLeaders', 'FG3_PCTLeaders', 'FGALeaders', 'FGMLeaders', 'FG_PCTLeaders', 'FTALeaders', 'FTMLeaders', 'FT_PCTLeaders', 'GPLeaders', 'OREBLeaders', 'PFLeaders', 'PTSLeaders', 'REBLeaders', 'STLLeaders', 'TOVLeaders']
```

#### Response
The response for each argument is shown below in key:value format

```json 
'{"ASTLeaders": ["PLAYER_ID", "PLAYER_NAME", "AST", "AST_RANK"], "BLKLeaders": ["PLAYER_ID", "PLAYER_NAME", "BLK", "BLK_RANK"], "DREBLeaders": ["PLAYER_ID", "PLAYER_NAME", "DREB", "DREB_RANK"], "FG3ALeaders": ["PLAYER_ID", "PLAYER_NAME", "FG3A", "FG3A_RANK"], "FG3MLeaders": ["PLAYER_ID", "PLAYER_NAME", "FG3M", "FG3M_RANK"], "FG3_PCTLeaders": ["PLAYER_ID", "PLAYER_NAME", "FG3_PCT", "FG3_PCT_RANK"], "FGALeaders": ["PLAYER_ID", "PLAYER_NAME", "FGA", "FGA_RANK"], "FGMLeaders": ["PLAYER_ID", "PLAYER_NAME", "FGM", "FGM_RANK"], "FG_PCTLeaders": ["PLAYER_ID", "PLAYER_NAME", "FG_PCT", "FG_PCT_RANK"], "FTALeaders": ["PLAYER_ID", "PLAYER_NAME", "FTA", "FTA_RANK"], "FTMLeaders": ["PLAYER_ID", "PLAYER_NAME", "FTM", "FTM_RANK"], "FT_PCTLeaders": ["PLAYER_ID", "PLAYER_NAME", "FT_PCT", "FT_PCT_RANK"], "GPLeaders": ["PLAYER_ID", "PLAYER_NAME", "GP", "GP_RANK"], "OREBLeaders": ["PLAYER_ID", "PLAYER_NAME", "OREB", "OREB_RANK"], "PFLeaders": ["PLAYER_ID", "PLAYER_NAME", "PF", "PF_RANK"], "PTSLeaders": ["PLAYER_ID", "PLAYER_NAME", "PTS", "PTS_RANK"], "REBLeaders": ["PLAYER_ID", "PLAYER_NAME", "REB", "REB_RANK"], "STLLeaders": ["PLAYER_ID", "PLAYER_NAME", "STL", "STL_RANK"], "TOVLeaders": ["PLAYER_ID", "PLAYER_NAME", "TOV", "TOV_RANK"]}'
```


**Example:** 

``` python
from nba_api.stats.endpoints import alltimeleadersgrids

alltime_stats = alltimeleadersgrids.AllTimeLeadersGrids()
alltime_stats.ast_leaders.get_json()
```
**Result:** 

``` json
'{"headers": ["PLAYER_ID", "PLAYER_NAME", "AST", "AST_RANK", "IS_ACTIVE_FLAG"], "data": [[304, "John Stockton", 15806, 1, "N"], [467, "Jason Kidd", 12091, 2, "N"], [101108, "Chris Paul", 10977, 3, "Y"], [959, "Steve Nash", 10335, 4, "N"], [349, "Mark Jackson", 10334, 5, "N"], [77142, "Magic Johnson", 10141, 6, "N"], [2544, "LeBron James", 10045, 7, "Y"], [600015, "Oscar Robertson", 9887, 8, "N"], [78318, "Isiah Thomas", 9061, 9, "N"], [56, "Gary Payton", 8966, 10, "N"]]}'
```

<!-- I want to put an image here chief and I don't know how -->

<!-- Endpoint name
Endpoint description 
Endpoint Installation 
Endpoint Arguments [#### **Arguments**]
Endpoint Parameters [#### Parameters]
Endpoint Example [**Example:** ]
Endpoint results [**Result:** ] 

#### Description
#### Query Parameters
#### Arguments Taken
#### Response
#### Response fields 
#### example
  -->

### Assist Leaders 

#### Description
This Endpoint returns the assist leaders for seasons. It can return the leaders for either teams or players.

``` python
from nba_api.stats.endpoints import assistleaders
assistleaders.AssistLeaders()
```

#### Query Parameters
API Parameter Name | Python Parameter Variable | Description | Status | Nullable
------------ | ------------ | :-----------: | :---: | :---:
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id | Options include NBA, ABA, G league, WNBA. | `Required` | Defaults to NBA. | 
[_**PerMode**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PerMode) | per_mode_simple | Options include total, per 36 minutes or per game  | `Required` | Defaults to total. | 
[_**PlayerOrTeam**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PlayerOrTeam) | player_or_team | Options to get results for either players or the team | `Required` | Defaults to team data | 
[_**Season**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#Season) | season_year_nullable | Options include current season, current datetime, current year of season. | Optional | Defaults to current season |
[_**SeasonType**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#SeasonType) | season_type_nullable | Other options include regular season or preseason. | Optional | `Yes` | 


#### Arguments Taken
This endpoint returns the assist leaders for each season either by team points or assists  

#### Response
``` text 
'{'AssistLeaders': ['RANK', 'TEAM_ID', 'TEAM_ABBREVIATION', 'TEAM_NAME', 'AST']}''
```

#### Example
Getting the player assist leaders of 2019-20 season 

``` python 
from nba_api.stats.endpoints import assistleaders
ast_leaders19_20 = assistleaders.AssistLeaders(season="2019-20", player_or_team="Player")
ast_leaders19_20.get_data_frames()
```

**Result:**
|    |   RANK |   PLAYER_ID | PLAYER         |    TEAM_ID | TEAM_ABBREVIATION   | TEAM_NAME              |   JERSEY_NUM | PLAYER_POSITION   |   AST |
|---:|-------:|------------:|:---------------|-----------:|:--------------------|:-----------------------|-------------:|:------------------|------:|
|  0 |      1 |        2544 | LeBron James   | 1610612747 | LAL                 | Los Angeles Lakers     |           23 | F                 |   684 |
|  1 |      2 |      201937 | Ricky Rubio    | 1610612756 | PHX                 | Phoenix Suns           |           11 | G                 |   570 |
|  2 |      3 |     1629027 | Trae Young     | 1610612737 | ATL                 | Atlanta Hawks          |           11 | G                 |   560 |
|  3 |      4 |     1629029 | Luka Doncic    | 1610612742 | DAL                 | Dallas Mavericks       |           77 | F-G               |   538 |
|  4 |      5 |      203081 | Damian Lillard | 1610612757 | POR                 | Portland Trail Blazers |            0 | G                 |   530 |




## Common Player stats

### CommonPlayerInfo

#### **Description**

This endpoint returns information about the players

``` python
from nba_api.stats.endpoints import commonplayerinfo
commonplayerinfo.CommonPlayerInfo(`parameter`)
```

#### Query Parameters
API Parameter Name | Python Parameter Variable | Description | Status | Nullable
------------ | ------------ | :---: | :---: | :---:
[_**PlayerID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PlayerID) | player_id | Player ID gotten from the static module | Required  | `No`
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id_nullable | League ID | Optional | Defaults to NBA. Other options include ABA, G league, WNBA.


#### Arguments Taken
This Endpoint can take a number of arguments to refine the search.
```text 
['AvailableSeasons', 'CommonPlayerInfo', 'PlayerHeadlineStats']
```

#### Response
The responses for each of the arguments is provided in the json object below. 


```json
{"AvailableSeasons": ["SEASON_ID"], "CommonPlayerInfo": ["PERSON_ID", "FIRST_NAME", "LAST_NAME", "DISPLAY_FIRST_LAST", "DISPLAY_LAST_COMMA_FIRST", "DISPLAY_FI_LAST", "PLAYER_SLUG", "BIRTHDATE", "SCHOOL", "COUNTRY", "LAST_AFFILIATION", "HEIGHT", "WEIGHT", "SEASON_EXP", "JERSEY", "POSITION", "ROSTERSTATUS", "TEAM_ID", "TEAM_NAME", "TEAM_ABBREVIATION", "TEAM_CODE", "TEAM_CITY", "PLAYERCODE", "FROM_YEAR", "TO_YEAR", "DLEAGUE_FLAG", "NBA_FLAG", "GAMES_PLAYED_FLAG", "DRAFT_YEAR", "DRAFT_ROUND", "DRAFT_NUMBER"], "PlayerHeadlineStats": ["PLAYER_ID", "PLAYER_NAME", "TimeFrame", "PTS", "AST", "REB", "PIE"]}
```
<!-- #### Response fields
Name | Type | Description
------------ | ------------ | ---------
AvailableSeasons.SEASON_ID | `number` | The season ID 
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.FIRST_NAME | `string` | Player's First Name 
CommonPlayerInfo.DISPLAY_FIRST_LAST | `string` | Player's Last Name 
CommonPlayerInfo.DISPLAY_LAST_COMMA_FIRST | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID
CommonPlayerInfo.PERSON_ID | `number` | Player ID -->

#### Example

**Getting the stats of LeBron James**

``` python
from nba_api.stats.endpoints import commonplayerinfo

lebron_data = commonplayerinfo.CommonPlayerInfo(2544)
lebron_data.json()
```
**Results:**

```json
 '{"resource": "commonplayerinfo", "parameters": [{"PlayerID": 2544}, {"LeagueID": null}], "resultSets": [{"name": "CommonPlayerInfo", "headers": ["PERSON_ID", "FIRST_NAME", "LAST_NAME", "DISPLAY_FIRST_LAST", "DISPLAY_LAST_COMMA_FIRST", "DISPLAY_FI_LAST", "PLAYER_SLUG", "BIRTHDATE", "SCHOOL", "COUNTRY", "LAST_AFFILIATION", "HEIGHT", "WEIGHT", "SEASON_EXP", "JERSEY", "POSITION", "ROSTERSTATUS", "GAMES_PLAYED_CURRENT_SEASON_FLAG", "TEAM_ID", "TEAM_NAME", "TEAM_ABBREVIATION", "TEAM_CODE", "TEAM_CITY", "PLAYERCODE", "FROM_YEAR", "TO_YEAR", "DLEAGUE_FLAG", "NBA_FLAG", "GAMES_PLAYED_FLAG", "DRAFT_YEAR", "DRAFT_ROUND", "DRAFT_NUMBER", "GREATEST_75_FLAG"], "rowSet": [[2544, "LeBron", "James", "LeBron James", "James, LeBron", "L. James", "lebron-james", "1984-12-30T00:00:00", "St. Vincent-St. Mary HS (OH)", "USA", "St. Vincent-St. Mary HS (OH)/USA", "6-9", "250", 19, "6", "Forward", "Active", "N", 1610612747, "Lakers", "LAL", "lakers", "Los Angeles", "lebron_james", 2003, 2022, "N", "Y", "Y", "2003", "1", "1", "Y"]]}, {"name": "PlayerHeadlineStats", "headers": ["PLAYER_ID", "PLAYER_NAME", "TimeFrame", "PTS", "AST", "REB", "PIE"], "rowSet": [[2544, "LeBron James", "2021-22", 30.3, 6.2, 8.2, 0.18]]}, {"name": "AvailableSeasons", "headers": ["SEASON_ID"], "rowSet": [["12003"], ["22003"], ["12004"], ["22004"], ["32004"], ["12005"], ["22005"], ["32005"], ["42005"], ["12006"], ["22006"], ["32006"], ["42006"], ["12007"], ["22007"], ["32007"], ["42007"], ["12008"], ["22008"], ["32008"], ["42008"], ["12009"], ["22009"], ["32009"], ["42009"], ["12010"], ["22010"], ["32010"], ["42010"], ["12011"], ["22011"], ["32011"], ["42011"], ["12012"], ["22012"], ["32012"], ["42012"], ["12013"], ["22013"], ["32013"], ["42013"], ["12014"], ["22014"], ["32014"], ["42014"], ["12015"], ["22015"], ["32015"], ["42015"], ["12016"], ["22016"], ["32016"], ["42016"], ["12017"], ["22017"], ["32017"], ["42017"], ["12018"], ["22018"], ["32018"], ["12019"], ["22019"], ["32019"], ["42019"], ["12020"], ["22020"], ["32020"], ["42020"], ["52020"], ["12021"], ["22021"], ["32021"]]}]}'
```







## Draft stats

### DraftHistory

#### Description
This endpoint returns the entire history of the NBA Draft.

``` python
from nba_api.stats.endpoints import drafthistory

drafthistory.DraftHistory()
```

#### Query Parameters

API Parameter Name | Python Parameter Variable | Description | Required | Nullable
------------ | ------------ | :-----------: | :---: | :---:
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id | League ID | Required | Defaults to NBA | 
[_**TopX**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#TopX) | topx_nullable | No Info available | Optional | `Yes` | 
[_**TeamID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#TeamID) | team_id_nullable | Team ID | Optional | `Yes` | 
[_**Season**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#Season) | season_year_nullable | Options include current season, current datetime, current year of season. | Optional | Defaults to current season | 
[_**RoundPick**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#RoundPick) | round_pick_nullable | No Info available | Optional | `Yes` | 
[_**RoundNum**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#RoundNum) | round_num_nullable | No Info available | Optional | `Yes` | 
[_**OverallPick**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#OverallPick) | overall_pick_nullable | No Info available | Optional | `Yes` | 
[_**College**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#College) | college_nullable | No Info available | Optional | `Yes` | 

#### Arguments Taken
This endpoint **Only** returns draft history with no other features. 

#### Response
``` text
{'DraftHistory': ['PERSON_ID',
  'PLAYER_NAME',
  'SEASON',
  'ROUND_NUMBER',
  'ROUND_PICK',
  'OVERALL_PICK',
  'DRAFT_TYPE',
  'TEAM_ID',
  'TEAM_CITY',
  'TEAM_NAME',
  'TEAM_ABBREVIATION',
  'ORGANIZATION',
  'ORGANIZATION_TYPE']}
```
#### Response fields

#### example
```python 
from nba_api.stats.endpoints import drafthistory
draft_df = drafthistory.DraftHistory()
draft_df.get_json()
```
**Result:**

```json
'{"resource": "drafthistory", "parameters": {"LeagueID": "00", "Season": null, "TeamID": null, "RoundNum": null, "RoundPick": null, "OverallPick": null, "TopX": null, "College": null}, "resultSets": [{"name": "DraftHistory", "headers": ["PERSON_ID", "PLAYER_NAME", "SEASON", "ROUND_NUMBER", "ROUND_PICK", "OVERALL_PICK", "DRAFT_TYPE", "TEAM_ID", "TEAM_CITY", "TEAM_NAME", "TEAM_ABBREVIATION", "ORGANIZATION", "ORGANIZATION_TYPE", "PLAYER_PROFILE_FLAG"], "rowSet": [[1631094, "Paolo Banchero", "2022", 1, 1, 1, "Draft", 1610612753, "Orlando", "Magic", "ORL", "Duke", "College/University", 1], [1631096, "Chet Holmgren", "2022", 1, 2, 2, "Draft", 1610612760, "Oklahoma City", "Thunder", "OKC", "Gonzaga", "College/University", 1], [1631095, "Jabari Smith Jr.", "2022", 1, 3, 3, "Draft", 1610612745, "Houston", "Rockets", "HOU", "Auburn", "College/University", 1], ...
```

## Franchise stats

### FranchiseLeaders


#### Description
This Endpoint gives the leaders in stats for a particular franchise/team

```python
from nba_api.stats.endpoints import franchiseleaders

franchiseleaders.FranchiseLeaders(`required parameter`)
```

#### Query Parameters
API Parameter Name | Python Parameter Variable | Description | Status | Nullable
------------ | ------------ | :-----------: | :---: | :---:
[_**TeamID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#TeamID) | team_id | Team ID | Required | `No` | 
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id_nullable | League | Optional | Defaults to NBA | 


#### Arguments Taken
This endpoint *only* returns a Franchise's stat leaders.

#### Response
```text
{'FranchiseLeaders': ['TEAM_ID',
  'PTS',
  'PTS_PERSON_ID',
  'PTS_PLAYER',
  'AST',
  'AST_PERSON_ID',
  'AST_PLAYER',
  'REB',
  'REB_PERSON_ID',
  'REB_PLAYER',
  'BLK',
  'BLK_PERSON_ID',
  'BLK_PLAYER',
  'STL',
  'STL_PERSON_ID',
  'STL_PLAYER']}
```
#### Response fields

#### example
Getting the Franchise Leaders for the Golden State Warriors (GSW)
```python
from nba_api.stats.endpoints import franchiseleaders
gsw_franchise = franchiseleaders.FranchiseLeaders(1610612744)
gsw_franchise.get_json()
```

**Results:**
```json
'{"resource": "playerawards", "parameters": {"LeagueID": null, "TeamID": 1610612744}, "resultSets": [{"name": "FranchiseLeaders", "headers": ["TEAM_ID", "PTS", "PTS_PERSON_ID", "PTS_PLAYER", "AST", "AST_PERSON_ID", "AST_PLAYER", "REB", "REB_PERSON_ID", "REB_PLAYER", "BLK", "BLK_PERSON_ID", "BLK_PLAYER", "STL", "STL_PERSON_ID", "STL_PLAYER"], "rowSet": [[1610612744, 20064, 201939, "Stephen Curry", 5388, 201939, "Stephen Curry", 12771, 600001, "Nate Thurmond", 1140, 1502, "Adonal Foyle", 1367, 201939, "Stephen Curry"]]}]}'
```




## Player stats

### PlayerAwards

#### Description
This Endpoint gives all the awards that a player has won.

```python
from nba_api.stats.endpoints import playerawards

playerawards.PlayerAwards(`required parameter`)
```

#### Query Parameters
API Parameter Name | Python Parameter Variable | Description | Status | Nullable
------------ | ------------ | :-----------: | :---: | :---:
[_**PlayerID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PlayerID) | player_id | Player ID | Required | `No` | 

#### Arguments Taken
This Endpoint returns *only* player awards with no additional features.

#### Response
```text
{'PlayerAwards': ['PERSON_ID',
  'FIRST_NAME',
  'LAST_NAME',
  'TEAM',
  'DESCRIPTION',
  'ALL_NBA_TEAM_NUMBER',
  'SEASON',
  'MONTH',
  'WEEK',
  'CONFERENCE',
  'TYPE',
  'SUBTYPE1',
  'SUBTYPE2',
  'SUBTYPE3']}
```

#### Response fields 

#### example
Getting all Andrew Wiggins awards in the NBA 

```python 
from nba_api.stats.endpoints import playerawards
wiggs = playerawards.PlayerAwards(203952)
wiggs.get_json()
```

**Results:**
``` json
'{"resource": "playerawards", "parameters": {"PlayerID": 203952}, "resultSets": [{"name": "PlayerAwards", "headers": ["PERSON_ID", "FIRST_NAME", "LAST_NAME", "TEAM", "DESCRIPTION", "ALL_NBA_TEAM_NUMBER", "SEASON", "MONTH", "WEEK", "CONFERENCE", "TYPE", "SUBTYPE1", "SUBTYPE2", "SUBTYPE3"], "rowSet": [[203952, "Andrew", "Wiggins", "Minnesota Timberwolves", "All-Rookie Team", "1", "2014-15", null, null, "1610612750", "Award", "Kia Motors", "KIART", null], [203952, "Andrew", "Wiggins", "Minnesota Timberwolves", "NBA Rookie of the Month", null, "2014-15", "1/1/2015", null, "West", "Award", "Kia Motors", "KIRMO", null], [203952, "Andrew", "Wiggins", "Minnesota Timberwolves", "NBA Rookie of the Month", null, "2014-15", "11/1/2014", null, "West", "Award", "Kia Motors", "KIRMO", null], [203952, "Andrew", "Wiggins", "Minnesota Timberwolves", "NBA Rookie of the Month", null, "2014-15", "12/1/2014", null, "West", "Award", "Kia Motors", "KIRMO", null], [203952, "Andrew", "Wiggins", "Minnesota Timberwolves", "NBA Rookie of the Year", null, "2014-15", null, null, null, "Award", "Kia Motors", "KIROY", null]]}]}'
```

### PlayerCareerStats

#### Description
This Endpoints returns a player's career statisitcs.

```python
from nba_api.stats.endpoints import playercareerstats

player_career = playercareerstats.PlayerCareerStats(`required parameter`)
```

#### Query Parameters
API Parameter Name | Python Parameter Variable | Description | Status | Nullable
------------ | ------------ | :-----------: | :---: | :---:
[_**PerMode**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PerMode) | per_mode36 | Options include total, per 36 minutes or per game | Required |  | 
[_**PlayerID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PlayerID) | player_id | Player ID | Required | `No` | 
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id_nullable | League ID | Optional | `Yes` | 


#### Arguments Taken
This Endpoint can take a number of arguments to refine the search.

``` text
['CareerTotalsAllStarSeason', 'CareerTotalsCollegeSeason', 'CareerTotalsPostSeason', 'CareerTotalsRegularSeason', 'SeasonRankingsPostSeason', 'SeasonRankingsRegularSeason', 'SeasonTotalsAllStarSeason', 'SeasonTotalsCollegeSeason', 'SeasonTotalsPostSeason', 'SeasonTotalsRegularSeason']
```
#### Response
The responses for each of the arguments is provided in the json object below.

```json
{"CareerTotalsAllStarSeason": ["PLAYER_ID", "LEAGUE_ID", "Team_ID", "GP", "GS", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"], "CareerTotalsCollegeSeason": ["PLAYER_ID", "LEAGUE_ID", "ORGANIZATION_ID", "GP", "GS", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"], "CareerTotalsPostSeason": ["PLAYER_ID", "LEAGUE_ID", "Team_ID", "GP", "GS", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"], "CareerTotalsRegularSeason": ["PLAYER_ID", "LEAGUE_ID", "Team_ID", "GP", "GS", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"], "SeasonRankingsPostSeason": ["PLAYER_ID", "SEASON_ID", "LEAGUE_ID", "TEAM_ID", "TEAM_ABBREVIATION", "PLAYER_AGE", "GP", "GS", "RANK_MIN", "RANK_FGM", "RANK_FGA", "RANK_FG_PCT", "RANK_FG3M", "RANK_FG3A", "RANK_FG3_PCT", "RANK_FTM", "RANK_FTA", "RANK_FT_PCT", "RANK_OREB", "RANK_DREB", "RANK_REB", "RANK_AST", "RANK_STL", "RANK_BLK", "RANK_TOV", "RANK_PTS", "RANK_EFF"], "SeasonRankingsRegularSeason": ["PLAYER_ID", "SEASON_ID", "LEAGUE_ID", "TEAM_ID", "TEAM_ABBREVIATION", "PLAYER_AGE", "GP", "GS", "RANK_MIN", "RANK_FGM", "RANK_FGA", "RANK_FG_PCT", "RANK_FG3M", "RANK_FG3A", "RANK_FG3_PCT", "RANK_FTM", "RANK_FTA", "RANK_FT_PCT", "RANK_OREB", "RANK_DREB", "RANK_REB", "RANK_AST", "RANK_STL", "RANK_BLK", "RANK_TOV", "RANK_PTS", "RANK_EFF"], "SeasonTotalsAllStarSeason": ["PLAYER_ID", "SEASON_ID", "LEAGUE_ID", "TEAM_ID", "TEAM_ABBREVIATION", "PLAYER_AGE", "GP", "GS", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"], "SeasonTotalsCollegeSeason": ["PLAYER_ID", "SEASON_ID", "LEAGUE_ID", "ORGANIZATION_ID", "SCHOOL_NAME", "PLAYER_AGE", "GP", "GS", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"], "SeasonTotalsPostSeason": ["PLAYER_ID", "SEASON_ID", "LEAGUE_ID", "TEAM_ID", "TEAM_ABBREVIATION", "PLAYER_AGE", "GP", "GS", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"], "SeasonTotalsRegularSeason": ["PLAYER_ID", "SEASON_ID", "LEAGUE_ID", "TEAM_ID", "TEAM_ABBREVIATION", "PLAYER_AGE", "GP", "GS", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"]}
```

#### Response fields 

#### Example:

**Getting Nikola Jokic's Regular Season Career Totals**

``` python 
from nba_api.stats.endpoints import playercareerstats

jokic_career= playercareerstats.PlayerCareerStats(203999)
jokic_career.career_totals_regular_season.get_data_frame()

```

**Result:**
|    |   PLAYER_ID |   LEAGUE_ID |   Team_ID |   GP |   GS |   MIN |   FGM |   FGA |   FG_PCT |   FG3M |   FG3A |   FG3_PCT |   FTM |   FTA |   FT_PCT |   OREB |   DREB |   REB |   AST |   STL |   BLK |   TOV |   PF |   PTS |
|---:|------------:|------------:|----------:|-----:|-----:|------:|------:|------:|---------:|-------:|-------:|----------:|------:|------:|---------:|-------:|-------:|------:|------:|------:|------:|------:|-----:|------:|
|  0 |      203999 |          00 |         0 |  527 |  486 | 16015 |  3982 |  7345 | 0.542137 |    536 |   1553 |  0.345138 |  1864 |  2246 | 0.829919 |   1393 |   4063 |  5456 |  3281 |   627 |   376 |  1462 | 1467 | 10364 |

## Team stats

### Team Info

#### Description
This Endpoint returns information about the teams in the NBA.

#### Query Parameters
API Parameter Name | Python Parameter Variable | Description | Status | Nullable
------------ | ------------ | :-----------: | :---: | :---:
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id | League ID | Required | Deafults to NBA. | 
[_**TeamID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#TeamID) | team_id | Team ID | Required | `No` | 
[_**SeasonType**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#SeasonType) | season_type_nullable | Other options include regular season or preseason. | Optional | `Yes` | 
[_**Season**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#Season) | season_nullable | Options include current season, current datetime, current year of season. | Optional | `Yes` | 


#### Arguments Taken
This Endpoint can take a number of arguments to refine the search.
```text
['AvailableSeasons', 'TeamInfoCommon', 'TeamSeasonRanks']
```
#### Response
``` json
{"AvailableSeasons": ["SEASON_ID"], "TeamInfoCommon": ["TEAM_ID", "SEASON_YEAR", "TEAM_CITY", "TEAM_NAME", "TEAM_ABBREVIATION", "TEAM_CONFERENCE", "TEAM_DIVISION", "TEAM_CODE", "W", "L", "PCT", "CONF_RANK", "DIV_RANK", "MIN_YEAR", "MAX_YEAR"], "TeamSeasonRanks": ["LEAGUE_ID", "SEASON_ID", "TEAM_ID", "PTS_RANK", "PTS_PG", "REB_RANK", "REB_PG", "AST_RANK", "AST_PG", "OPP_PTS_RANK", "OPP_PTS_PG"]}
```
#### Response fields 
#### Example
Getting Dallas Mavericks' Common Team Information

```python 
from nba_api.stats.endpoints import teaminfocommon
dallas_teaminfo = teaminfocommon.TeamInfoCommon(1610612742)
dallas_teaminfo.team_info_common.get_data_frame()
```

**Result:**
|    |    TEAM_ID | SEASON_YEAR   | TEAM_CITY   | TEAM_NAME   | TEAM_ABBREVIATION   | TEAM_CONFERENCE   | TEAM_DIVISION   | TEAM_CODE   | TEAM_SLUG   |   W |   L |   PCT | CONF_RANK   |   DIV_RANK |   MIN_YEAR |   MAX_YEAR |
|---:|-----------:|:--------------|:------------|:------------|:--------------------|:------------------|:----------------|:------------|:------------|----:|----:|------:|:------------|-----------:|-----------:|-----------:|
|  0 | 1610612742 | 2022-23       | Dallas      | Mavericks   | DAL                 | West              | Southwest       | mavericks   | mavericks   |   0 |   0 |     0 |             |          0 |       1980 |       2022 |





