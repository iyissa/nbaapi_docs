---
title: Static Module 
---

# Introduction
All endpoints in this package always need either a ```player ID``` or ```team ID```. Both of these are gotten from the Static module.

## Player ID
You can find players using a regex pattern `case-insensitive` by full name, first name, last_name.

``` python 
from nba_api.stats.static import players

# Find players by full name.
players.find_players_by_full_name('')

# Find players by first name.
players.find_players_by_first_name('')

# Find players by last name.
players.find_players_by_last_name('')

# Get all players.
players.get_players()
```

## Team ID

You can find teams using regex patterns on fields such as full name, state, city, and nickname. As well as finding teams by year founded, abbreviation, and id.

```python
from nba_api.stats.static import teams

# Find teams by full name.
teams.find_teams_by_full_name('cav')

# Find teams by state.
teams.find_teams_by_state('ohio')

# Find teams by city.
teams.find_teams_by_city('cleveland')

# Find teams by team nickname.
teams.find_teams_by_nickname('cav')

# Find teams by year founded.
teams.find_teams_by_year_founded(1968)

# Find teams by abbreviation.
teams.find_team_by_abbreviation('cle')

# Find teams by id.
teams.find_team_name_by_id(1610612739)

# Get all teams.
teams.get_teams()
```

## Accessing with the data
You can retrieve the data in different formats. The availabale formats are `json`, a `dictionary`, a normalized `json` dictionary (`header:value` format), a normalized `dictionary`, and in a list of pandas `DataFrame`. 

```python
# Returns the raw response of the request.
.get_response()

# Returns all data in a JSON string.
.get_json()

# Returns all data in a dictionary.
.get_dict()

# Returns all data in a normalized JSON string.
.get_normalized_json()

# Returns all data in a normalized dictionary.
.get_normalized_dict()

# Returns a list of all data in a pandas DataFrame structure.
.get_data_frames()
```

## Example

### Finding Player ID.

To get Lebron James' id

``` python 
from nba_api.stats.static import players 

lebron = players.find_players_by_full_name("Lebron James")
```

**Result:** ```[{'id': 2544,'full_name': 'LeBron James','first_name': 'LeBron','last_name': 'James','is_active': True}]```

### Finding Team ID.

To get Golden State Warriors

```
from nba_api.stats.static import teams

teams.find_team_by_abbreviation('gsw')
```
**Result:** ```{'id': 1610612744,'full_name': 'Golden State Warriors','abbreviation': 'GSW','nickname': 'Warriors','city': 'Golden State','state':'California','year_founded': 1946}```
