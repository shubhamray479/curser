import { useMemo } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  Avatar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Link,
  IconButton
} from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

function App() {
  const projects = useMemo(
    () => [
      {
        title: 'Project One',
        description:
          'A modern web app demonstrating responsive design, accessibility, and smooth interactions.',
        image: 'https://picsum.photos/seed/p1/600/400',
        tags: ['React', 'MUI', 'Vite'],
        url: '#'
      },
      {
        title: 'Project Two',
        description:
          'A data visualization dashboard with interactive charts and real-time updates.',
        image: 'https://picsum.photos/seed/p2/600/400',
        tags: ['TypeScript', 'Charts', 'API'],
        url: '#'
      },
      {
        title: 'Project Three',
        description:
          'A performant backend-integrated app with authentication and role-based access.',
        image: 'https://picsum.photos/seed/p3/600/400',
        tags: ['Full‑stack', 'Auth', 'Cloud'],
        url: '#'
      }
    ],
    []
  )

  return (
    <Box>
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Your Name</Typography>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>

      <Box component="section" id="hero" sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, rgba(25,118,210,0.08) 0%, rgba(156,39,176,0.08) 100%)'
      }}>
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Avatar sx={{ width: 96, height: 96, bgcolor: 'primary.main' }}>Y</Avatar>
            <Stack spacing={1}>
              <Typography variant="h3" component="h1">Hi, I’m Your Name</Typography>
              <Typography variant="h6" color="text.secondary">Frontend Developer • UI/UX Enthusiast • Open Source</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary" href="#projects">View Projects</Button>
              <Button variant="outlined" color="secondary" href="#contact">Get in Touch</Button>
            </Stack>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" component={Link} href="https://github.com" target="_blank" rel="noopener">
                <GitHub />
              </IconButton>
              <IconButton color="inherit" component={Link} href="https://www.linkedin.com" target="_blank" rel="noopener">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" component={Link} href="#contact">
                <Email />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="projects" sx={{ py: { xs: 8, md: 10 } }}>
        <Container>
          <Stack spacing={4}>
            <Typography variant="h4">Projects</Typography>
            <Grid container spacing={3}>
              {projects.map((p, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia component="img" image={p.image} alt={p.title} sx={{ aspectRatio: '3 / 2' }} />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom>{p.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{p.description}</Typography>
                      <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                        {p.tags.map((t) => (
                          <Chip key={t} size="small" label={t} />
                        ))}
                      </Stack>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={p.url} target="_blank" rel="noopener">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="about" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>About</Typography>
              <Typography color="text.secondary">
                I design and build thoughtfully crafted web experiences focused on performance,
                accessibility, and maintainability. I enjoy turning complex problems into simple,
                beautiful interfaces.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>Skills</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {['React', 'TypeScript', 'MUI', 'Node.js', 'Vite', 'Testing'].map((s) => (
                      <Chip key={s} label={s} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="sm">
          <Stack spacing={2} textAlign="center">
            <Typography variant="h4">Contact</Typography>
            <Typography color="text.secondary">Email me at <Link href="mailto:you@example.com">you@example.com</Link></Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" startIcon={<Email />} href="mailto:you@example.com">Email</Button>
              <Button variant="outlined" startIcon={<LinkedIn />} href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="footer" sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default App
