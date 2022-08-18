---
title: Endpoints
---

# Introduction
As of the time of the time of writing, there are currently 135 different stats that this package can access from [**The NBA Website.**](https://www.nba.com/stats/)

Each endpoint gives information about the data it returns, paramters that the endpoint takes and sample results. 

::: danger WARNING
Some of these do not have sample results included and you can use the contact page to find avenues to get solutions to problems. 
:::

## All Time stats

## AllTimeLeadersGrids
This Endpoint returns All time leaders for different stats in the NBA. 

``` python
from nba_api.stats.endpoints import alltimeleadersgrids
alltimeleadersgrids.AllTimeLeadersGrids()
```

#### **Arguments**
This module can take arguments to access data for the following. The stats, arguments to pass in. The results are shown in the block below each argument.


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

``` js 
'{"headers": ["PLAYER_ID", "PLAYER_NAME", "AST", "AST_RANK", "IS_ACTIVE_FLAG"], "data": [[304, "John Stockton", 15806, 1, "N"], [467, "Jason Kidd", 12091, 2, "N"], [101108, "Chris Paul", 10977, 3, "Y"], [959, "Steve Nash", 10335, 4, "N"], [349, "Mark Jackson", 10334, 5, "N"], [77142, "Magic Johnson", 10141, 6, "N"], [2544, "LeBron James", 10045, 7, "Y"], [600015, "Oscar Robertson", 9887, 8, "N"], [78318, "Isiah Thomas", 9061, 9, "N"], [56, "Gary Payton", 8966, 10, "N"]]}'
```

<!-- I want to put an image here chief and I don't know how -->



