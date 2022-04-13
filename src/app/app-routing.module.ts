import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'open-story/:id',
    loadChildren: () => import('./home/open-story/open-story.module').then(m => m.OpenStoryPageModule)
  },
  {
    path: 'categories/:id',
    loadChildren: () => import('./home/categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then(m => m.FavouritePageModule)
  },
  {
    path: 'preview/:id',
    loadChildren: () => import('./preview/preview.module').then(m => m.PreviewPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
