import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'filmes',
    loadChildren: () => import('./inicio/filmes/filmes.module').then( m => m.FilmesPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./inicio/series/series.module').then( m => m.SeriesPageModule)
  },
  {
    path: 'animes',
    loadChildren: () => import('./inicio/animes/animes.module').then( m => m.AnimesPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./inicio/filmes/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'jurassic-world',
    loadChildren: () => import('./inicio/filmes/jurassic-world/jurassic-world.module').then( m => m.JurassicWorldPageModule)
  },
  {
    path: 'star-wars',
    loadChildren: () => import('./inicio/filmes/star-wars/star-wars.module').then( m => m.StarWarsPageModule)
  },
  {
    path: 'titanic',
    loadChildren: () => import('./inicio/filmes/titanic/titanic.module').then( m => m.TitanicPageModule)
  },
  {
    path: 'vingadores',
    loadChildren: () => import('./inicio/filmes/vingadores/vingadores.module').then( m => m.VingadoresPageModule)
  },
  {
    path: 'breaking-bad',
    loadChildren: () => import('./inicio/series/breaking-bad/breaking-bad.module').then( m => m.BreakingBadPageModule)
  },
  {
    path: 'game-of-thrones',
    loadChildren: () => import('./inicio/series/game-of-thrones/game-of-thrones.module').then( m => m.GameOfThronesPageModule)
  },
  {
    path: 'simpsons',
    loadChildren: () => import('./inicio/series/simpsons/simpsons.module').then( m => m.SimpsonsPageModule)
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./inicio/series/rick-and-morty/rick-and-morty.module').then( m => m.RickAndMortyPageModule)
  },
  {
    path: 'the-walking-dead',
    loadChildren: () => import('./inicio/series/the-walking-dead/the-walking-dead.module').then( m => m.TheWalkingDeadPageModule)
  },
  {
    path: 'death-note',
    loadChildren: () => import('./inicio/animes/death-note/death-note.module').then( m => m.DeathNotePageModule)
  },
  {
    path: 'fullmetal',
    loadChildren: () => import('./inicio/animes/fullmetal/fullmetal.module').then( m => m.FullmetalPageModule)
  },
  {
    path: 'naruto',
    loadChildren: () => import('./inicio/animes/naruto/naruto.module').then( m => m.NarutoPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./inicio/animes/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'tokyo-ghoul',
    loadChildren: () => import('./inicio/animes/tokyo-ghoul/tokyo-ghoul.module').then( m => m.TokyoGhoulPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
