---
title: Endpoints
---

# Introduction
As of the time of the time of writing, there are currently 135 different stats that this package can access from [**The NBA Website.**](https://www.nba.com/stats/)

Each endpoint gives information about the data it returns, parameters that the endpoint takes and sample results. 

### Note
!!! tip Tip
To get all the arguments that an endpoint can return, use `.expected_data.keys()`
!!!

**Example**

``` python
from nba_api.stats.endpoints import commonplayerinfo
lebron_data = commonplayerinfo.CommonPlayerInfo(2544)
lebron_data.expected_data.keys()
```

This returns all the arguments the `commonplayerinfo` endpoint can take. 
```text
dict_keys(['AvailableSeasons', 'CommonPlayerInfo', 'PlayerHeadlineStats'])
```

::: danger WARNING
Some of these do not have sample results included and you can use the contact page to find avenues to get solutions to problems. 
:::

 

## All Time stats

### AllTimeLeadersGrids
This Endpoint returns All time leaders for different stats in the NBA. 

``` python
from nba_api.stats.endpoints import alltimeleadersgrids
alltimeleadersgrids.AllTimeLeadersGrids()
```

#### **Arguments**
This package gives a short summary of what you can expect from each This module can take arguments to access data for the following. The stats, arguments to pass in. The results are shown in the block below each argument.


*Assist Leaders*  `ast_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'AST', 'AST_RANK']
```

*Block Leaders* `blk_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'BLK', 'BLK_RANK']
```

*Defensive Rebound Leaders* `dreb_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'DREB', 'DREB_RANK']
```

*3 Point Field Goals Attempted Leaders* `fg3_a_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FG3A', 'FG3A_RANK']
```

*3 Point Field Goals Made Leaders* `fg3_m_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FG3M', 'FG3M_RANK']
```
*3 Point Field Goals Percentage Leaders* `fg3_pct_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FG3_PCT', 'FG3_PCT_RANK']
```

*Field Goals Attempted Leaders* `fga_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FGA', 'FGA_RANK']
```

*Field Goals Made Leaders* `fgm_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FGM', 'FGM_RANK']
```

*Field Goals Percentage Leaders* `fg_pct_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FG_PCT', 'FG_PCT_RANK']
```

*Free Throw Attempted Leaders* `fta_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FTA', 'FTA_RANK']
```

*Free Throw Made Leaders* `ftm_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FTM', 'FTM_RANK']
```

*Free Throw Percentage Leaders* `ft_pct_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'FT_PCT', 'FT_PCT_RANK']
```

*Games Played Leaders* `g_p_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'GP', 'GP_RANK']
```

*Offensive Rebound leaders* `oreb_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'OREB', 'OREB_RANK']
```

*Personal Foul Leaders*  `pf_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'PF', 'PF_RANK']
```

*Points Leaders* `pts_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'PTS', 'PTS_RANK']
```

*Rebound Leaders* `reb_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'REB', 'REB_RANK']
```

*Steal Leaders* `stl_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'STL', 'STL_RANK']
```

*Turnovers Leaders* `tov_leaders`
```text
['PLAYER_ID', 'PLAYER_NAME', 'TOV', 'TOV_RANK']
```


#### Parameters


API Parameter Name | Python Parameter Variable | Pattern | Required | Nullable
------------ | ------------ | :-----------: | :---: | :---:
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id |  | `Y` |  | 
[_**PerMode**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PerMode) | per_mode_simple |  | `Y` |  | 
[_**SeasonType**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#SeasonType) | season_type |  | `Y` |  | 
[_**TopX**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#TopX) | topx |  | `Y` |  | 

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

#### **Description**
#### **Query Parameters**
#### **Examples**
#### **Parameters Examples**
#### **Response** 
#### **Response fields**  -->

## Common Player stats

### CommonPlayerInfo

#### **Description**

This endpoint returns information about the players

``` python
from nba_api.stats.endpoints import commonplayerinfo
commonplayerinfo.CommonPlayerInfo(`parameter`)
```

#### Query Parameters
API Parameter Name | Python Parameter Variable | Required | Nullable | Description
------------ | ------------ | :---: | :---: | ------
[_**PlayerID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#PlayerID) | player_id | `Yes` | `No` | Player ID gotten from the static module
[_**LeagueID**_](https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#LeagueID) | league_id_nullable | `No` | `Yes` | Defaults to NBA. Other options include ABA, G league, WNBA.


#### Arguments Taken
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

```
 '{"resource": "commonplayerinfo", "parameters": [{"PlayerID": 2544}, {"LeagueID": null}], "resultSets": [{"name": "CommonPlayerInfo", "headers": ["PERSON_ID", "FIRST_NAME", "LAST_NAME", "DISPLAY_FIRST_LAST", "DISPLAY_LAST_COMMA_FIRST", "DISPLAY_FI_LAST", "PLAYER_SLUG", "BIRTHDATE", "SCHOOL", "COUNTRY", "LAST_AFFILIATION", "HEIGHT", "WEIGHT", "SEASON_EXP", "JERSEY", "POSITION", "ROSTERSTATUS", "GAMES_PLAYED_CURRENT_SEASON_FLAG", "TEAM_ID", "TEAM_NAME", "TEAM_ABBREVIATION", "TEAM_CODE", "TEAM_CITY", "PLAYERCODE", "FROM_YEAR", "TO_YEAR", "DLEAGUE_FLAG", "NBA_FLAG", "GAMES_PLAYED_FLAG", "DRAFT_YEAR", "DRAFT_ROUND", "DRAFT_NUMBER", "GREATEST_75_FLAG"], "rowSet": [[2544, "LeBron", "James", "LeBron James", "James, LeBron", "L. James", "lebron-james", "1984-12-30T00:00:00", "St. Vincent-St. Mary HS (OH)", "USA", "St. Vincent-St. Mary HS (OH)/USA", "6-9", "250", 19, "6", "Forward", "Active", "N", 1610612747, "Lakers", "LAL", "lakers", "Los Angeles", "lebron_james", 2003, 2022, "N", "Y", "Y", "2003", "1", "1", "Y"]]}, {"name": "PlayerHeadlineStats", "headers": ["PLAYER_ID", "PLAYER_NAME", "TimeFrame", "PTS", "AST", "REB", "PIE"], "rowSet": [[2544, "LeBron James", "2021-22", 30.3, 6.2, 8.2, 0.18]]}, {"name": "AvailableSeasons", "headers": ["SEASON_ID"], "rowSet": [["12003"], ["22003"], ["12004"], ["22004"], ["32004"], ["12005"], ["22005"], ["32005"], ["42005"], ["12006"], ["22006"], ["32006"], ["42006"], ["12007"], ["22007"], ["32007"], ["42007"], ["12008"], ["22008"], ["32008"], ["42008"], ["12009"], ["22009"], ["32009"], ["42009"], ["12010"], ["22010"], ["32010"], ["42010"], ["12011"], ["22011"], ["32011"], ["42011"], ["12012"], ["22012"], ["32012"], ["42012"], ["12013"], ["22013"], ["32013"], ["42013"], ["12014"], ["22014"], ["32014"], ["42014"], ["12015"], ["22015"], ["32015"], ["42015"], ["12016"], ["22016"], ["32016"], ["42016"], ["12017"], ["22017"], ["32017"], ["42017"], ["12018"], ["22018"], ["32018"], ["12019"], ["22019"], ["32019"], ["42019"], ["12020"], ["22020"], ["32020"], ["42020"], ["52020"], ["12021"], ["22021"], ["32021"]]}]}'
```







## Draft stats

### DraftHistory

## Franchise stats

### FranchiseLeaders

## Leaders stats

### LeadersTiles

## Award stats

### PlayerAwards

### PlayerCompare

## Team stats

### Team Info



