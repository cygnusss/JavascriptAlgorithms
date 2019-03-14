def makeGraph(edges):
  graph = dict()
  for e in edges:
    v, d = e[0], e[1]
    if v not in graph:
      graph[v] = list()
    if d not in graph:
      graph[d] = list()
    graph[v].append(d)
  return graph

def getIndegree(graph):
  indegree = dict()
  for v, neighbors in graph.items():
    if v not in indegree: 
      indegree[v] = 0
    for n in neighbors:
      if n not in indegree:
        indegree[n] = 1
      else: 
        indegree[n] += 1
  return indegree

def topoSort(a_list):
  import collections
  ans = []
  graph = makeGraph(a_list)
  indegrees = getIndegree(graph)
  queue = collections.deque()
  for vertex, indegree in indegrees.items():
    if indegree == 0: queue.appendleft(vertex)
  while len(queue):
    vertex = queue.pop()
    ans.append(vertex)
    for neighbor in graph[vertex]:
      indegrees[neighbor] -= 1
      if indegrees[neighbor] == 0:
        queue.appendleft(neighbor)
  return ans


edges = [[0,1], [0,2], [1,3], [2,3], [3,4]]
g = makeGraph(edges)
print topoSort(edges)
