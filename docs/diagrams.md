---
title: Parameter Module
---

# Diagrams

List of diagrams possible with `vuepress-theme-cool`
## Mermaid

The `Page` and `Screen` calls tell Segment what web page or mobile screen the user is on. This call automatically captures important context traits, so you don't have to manually implement and send this data.

| **Page context** auto-captured | **Screen context** auto-captured                    |             |                                                                                                    |
| ------------------------------ | --------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------- |
| **title**                      | *window.location.title*                             | **app**     | *build, name, namespace, version*                                                                  |
| **url**                        | *window.location.url*                               | **device**  | *adTrackingEnabled, advertisingId (IDFA/AAID), device ID, manufacturer, model, type (android/ios)* |
| **path**                       | *window.location.path*                              | **library** | *name, version*                                                                                    |
| **referrer**                   | *window.document.referrer*                          | **locale**  | *window.document.referrer*                                                                         |
| **search**                     | *window.location.search*                            | **network** | *cellular, wifi*                                                                                   |
| **ip**                         | *address*                                           | **ip**      | address                                                                                            |
| **userAgent**                  | *string*                                            | **os**      | name, version                                                                                      |
| **campaign**                   | *utm_source, utm_medium, utm_campaign, utm_content* | **screen**  | height, width                                                                                      |


```
<mermaid>
graph TD
  A[Silvester] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>
```

<mermaid>
graph TD
  A[Silvester] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>


```js
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
```

<mermaid>
sequenceDiagram
  Alice->>Bob: Hello Bob, how are you?
  alt is sick
      Bob->>Alice: Not so good :(
  else is well
      Bob->>Alice: Feeling fresh like a daisy
  end
  opt Extra response
      Bob->>Alice: Thanks for asking
  end
</mermaid>

```js
gantt
section Section
Completed :done,    des1, 2014-01-06,2014-01-08
Active        :active,  des2, 2014-01-07, 3d
Parallel 1   :         des3, after des1, 1d
Parallel 2   :         des4, after des1, 1d
Parallel 3   :         des5, after des3, 1d
Parallel 4   :         des6, after des4, 1d
```
<mermaid>
gantt
section Section
Completed :done,    des1, 2014-01-06,2014-01-08
Active        :active,  des2, 2014-01-07, 3d
Parallel 1   :         des3, after des1, 1d
Parallel 2   :         des4, after des1, 1d
Parallel 3   :         des5, after des3, 1d
Parallel 4   :         des6, after des4, 1d
</mermaid>


### Mermaid 8.4.3

Newer Versions of mermaid are required for these diagrams

```
stateDiagram
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]
```

<mermaid>
stateDiagram
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]
</mermaid>

---

## PlantUml

```js
@startuml
Bob -> Alice : hello
@enduml
```

@startuml
Bob -> Alice : hello
@enduml

<br />

@startuml
@startmindmap
caption figure 1
title My super title

* <&flag>Debian
** <&globe>Ubuntu
*** Linux Mint
*** Kubuntu
*** Lubuntu
*** KDE Neon
** <&graph>LMDE
** <&pulse>SolydXK
** <&people>SteamOS
** <&star>Raspbian with a very long name
*** <s>Raspmbc</s> => OSMC
*** <s>Raspyfi</s> => Volumio

header
My super header
endheader

center footer My super footer

legend right
  Short
  legend
endlegend
@endmindmap
@enduml

```js
@startuml
node in as "input"
node p as "Pre-processing"
node fm as "Feature Mining"
node fs as "Feature Selection"
node fr as "Feature Reduction"
node m as "Modelling"
node a as "Accepted Results?"
node pp as "Post-processing"
node o as "Output"

in -> p
p ..> fm
fm ..> fs
fs ..> fr
fr ..> m
m ..> a
a ..> fm : no
a -> pp : yes
pp -> o
@enduml
```

@startuml
  node in as "input"
  node p as "Pre-processing"
  node fm as "Feature Mining"
  node fs as "Feature Selection"
  node fr as "Feature Reduction"
  node m as "Modelling"
  node a as "Accepted Results?"
  node pp as "Post-processing"
  node o as "Output"

  in -> p
  p ..> fm
  fm ..> fs
  fs ..> fr
  fr ..> m
  m ..> a
  a ..> fm : no
  a -> pp : yes
  pp -> o
@enduml

```js
@startuml
  |Required Steps|
  :"Start Assignment";
  |#AntiqueWhite|Documentation|
  :Create Git Repo/Overleaf;
  :Copy Down Questions;
  |#LightBlue|Git|
  :Initial Barebones Commit;
  |Required Steps|
  :"Answer Questions";
  :"Submit Assignment";
  |Git|
  :"Update Local Repo";
  :"Update CENG4B Notes;
  stop
@enduml
```

@startuml
|Required Steps|
:"Start Assignment";
|#AntiqueWhite|Documentation|
:Create Git Repo/Overleaf;
:Copy Down Questions;
|#LightBlue|Git|
:Initial Barebones Commit;
|Required Steps|
:"Answer Questions";
:"Submit Assignment";
|Git|
:"Update Local Repo";
:"Update CENG4B Notes;
stop
@enduml

```js
  @startuml
 (*) --> [File System ] "input.json "
  note left
  1. Read Entire File into memory
  end note
  -->[Available Memory]"JSON data loaded in memory"
  note left
  2. Process file
  in memory.
  end note
  note right
  When loading a file into
  memory to be parsed as
  JSON or CSV, we’re limited
  by the max string size
  in Node.js: around 536 MB
  as of Node v8
  end note
  --> [File System] "output.json"
  note left
  3. Write transform data back into system
  end note
  --> (*)
  @enduml
```

@startuml
 (*) --> [File System ] "input.json "
  note left
  1. Read Entire File into memory
  end note
  -->[Available Memory]"JSON data loaded in memory"
  note left
  2. Process file
  in memory.
  end note
  note right
  When loading a file into
  memory to be parsed as
  JSON or CSV, we’re limited
  by the max string size
  in Node.js: around 536 MB
  as of Node v8
  end note
  --> [File System] "output.json"
  note left
  3. Write transform data back into system
  end note
  --> (*)
@enduml


### Solidity Diagraph
@startuml
digraph foo {
  node [style=rounded]
  node1 [shape=box]
  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]
  node3 [shape=record, label="{ a | b | c }"]

  node1 -> node2 -> node3
}
@enduml

```js
@startuml
strict digraph cool {
  exists [color=blue]
  authenticate [color=blue]
  require
  create
  UserCreated
  destroy
  UserDestroyed
  get [color=blue]
  authenticate -> require
  create -> UserCreated
  destroy -> require
  destroy -> UserDestroyed
  get -> require
}
@enduml
```

@startuml
strict digraph cool {
  exists [color=blue]
  authenticate [color=blue]
  require
  create
  UserCreated
  destroy
  UserDestroyed
  get [color=blue]
  authenticate -> require
  create -> UserCreated
  destroy -> require
  destroy -> UserDestroyed
  get -> require
}
@enduml

### References

- [Mermaid](https://github.com/knsv/mermaid)
- [KaTeX](https://github.com/Khan/KaTeX)
